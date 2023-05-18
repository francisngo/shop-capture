import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import http from 'http';
import bodyParser from 'body-parser';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { expressMiddleware } from '@apollo/server/express4';
import typeDefs from './schemas/categories.typeDefs.js';
import resolvers from './resolvers/categories.resolver.js'

const app = express();

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
        morgan('dev'),
        cors(),
        bodyParser.json(),
        expressMiddleware(server),
      );

    await new Promise<void>((resolve) =>
        httpServer.listen({ port: 4000 }, resolve)
    );
    console.log(`🚀 Server ready at http://localhost:4000`);
})();
