require('dotenv').config();
const express = require("express");
const morgan = require('morgan');
const cors = require('cors');
const http = require('http');
const { ApolloServer } = require('@apollo/server');
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer')
const { expressMiddleware } = require('@apollo/server/express4')
const typeDefs = require('./schemas/categories.typeDefs');
const resolvers = require('./resolvers/categories.resolver');

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(morgan("combined"));
app.use(express.json());
const httpServer = http.createServer(app);
const api = require('./routes/api'); 

(async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
    });
    await server.start();

    app.use(
        '/graphql',
        express.json(),
        expressMiddleware(server),
    );

    app.use('/v1', api);

    const PORT = process.env.PORT || 4000;
    await new Promise<void>((resolve) =>
        httpServer.listen({ port: PORT }, resolve)
    );
    console.log(`🚀 Server ready at http://localhost:4000`);
})();
