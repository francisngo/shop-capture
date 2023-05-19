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
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(morgan("combined"));
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
        const body = req.body;
        console.log('body: ', body);
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: 1000,
                    quantity: 1,
                }
            ],
            mode: 'payment',
            success_url: `${process.env.CLIENT_URL}?success=true`,
            cancel_url: `${process.env.CLIENT_URL}?canceled=true`,
            shipping_address_collection: { allowed_countries: ['US'] },
            payment_method_types: ['card'],
        });

        // TODO: write order to database

        res.redirect(303, session.url);
    });

    await new Promise<void>((resolve) =>
        httpServer.listen({ port: 4000 }, resolve)
    );
    console.log(`🚀 Server ready at http://localhost:4000`);
})();
