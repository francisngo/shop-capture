import path from 'path';
import admin from 'firebase-admin';
import { gql } from 'graphql-tag';
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const serviceAccount = path.resolve(__dirname, 'config/service-account.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

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

const typeDefs = gql`
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
        category(title: String!): Category
        categories: [Category]
    }
`


const resolvers = {
    Query: {
        categories: async () => {
            const snapshot = await db
                .collection('categories')
                .get();
            return snapshot.docs.map(doc => {
                console.log(doc);
                return doc.data()
            }) as Category[];
        },
        category: async (_: any, { title }) => {
            const snapshot = await db
                .collection('categories')
                .where('title', '==', title)
                .get();
            if (snapshot.empty) {
                console.log('No matching documents.');
                return;
            }
            let data;
            snapshot.forEach(doc => data = doc.data());
            return data;
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