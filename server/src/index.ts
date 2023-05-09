import admin from 'firebase-admin';
import * as path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const serviceAccount = path.resolve(__dirname, 'config/service-account.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

interface CategoryItem {
    id: number,
    imageUrl: string,
    name: string,
    price: number,
}

interface Category {
    title: string,
    items: [CategoryItem]
}

const typeDefs = `#graphql
    type CategoryItem {
        id: Int,
        imageUrl: String,
        name: String,
        price: Int,
    }

    # A Capture List of Categories
    type Category {
        title: String,
        items: [CategoryItem]
    }

    type Query {
        category(name: String!): Category
        categories: [Category]
    }
`

const resolvers = {
    Query: {
        categories: async () => {
            const snapshot = await admin 
                .firestore()
                .collection('categories')
                .get();
            return snapshot.docs.map(doc => doc.data()) as Category[];
        },
        category: async (_: any, { name }) => {
            const doc = await admin 
                .firestore()
                .collection('categories')
                .doc(name)
                .get();
            return doc.data();
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);