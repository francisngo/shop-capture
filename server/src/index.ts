require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const http = require('http');
const bodyParser = require('body-parser');
const { ApolloServer } = require('@apollo/server');
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer')
const { expressMiddleware } = require('@apollo/server/express4')
const typeDefs = require('./schemas/categories.typeDefs.js');
const resolvers = require('./resolvers/categories.resolver.js');

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(morgan("combined"));
app.use(bodyParser.json())
const stripe = require('stripe')(process.env.STRIPE_API_KEY);

(async () => {
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
    });
    await server.start();

    app.use(
        '/graphql',
        bodyParser.json(),
        expressMiddleware(server),
    );

    app.post('/create-checkout-session', async (req, res) => {
        try {
            const { products = [] } = req.body
            const session = await stripe.checkout.sessions.create({
                line_items: products,
                mode: 'payment',
                success_url: `${process.env.CLIENT_URL}/order-confirmation`,
                cancel_url: `${process.env.CLIENT_URL}`,
                shipping_address_collection: { allowed_countries: ['US'] },
                payment_method_types: ['card'],
            });
            res.send(JSON.stringify({
                url: session.url
            }));
        } catch(error) {
            console.log(error);
        }
    });

    const PORT = process.env.PORT || 4000;
    await new Promise<void>((resolve) =>
        httpServer.listen({ port: PORT }, resolve)
    );
    console.log(`🚀 Server ready at http://localhost:4000`);
})();
