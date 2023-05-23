import dotenv from 'dotenv'
import express from "express";
import morgan from 'morgan';
import cors from 'cors';
import http from 'http';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { expressMiddleware } from '@apollo/server/express4';
import typeDefs from './schemas/categories.typeDefs';
import resolvers from './resolvers/categories.resolver';
import api from './routes/api'; 
dotenv.config();

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(morgan("combined"));
app.use(express.json());
const httpServer = http.createServer(app);

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
