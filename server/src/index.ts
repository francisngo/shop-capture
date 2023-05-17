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

    type Category {
        title: String,
        items: [CategoryItem]
    }

    type FeaturedProducts {
        id: Int,
        imageUrl: String,
        name: String,
        price: Int,
    }

    type Product {
        id: Int,
        imageUrl: String,
        name: String,
        price: Int,
    }

    type Query {
        category(title: String!): Category
        categories: [Category]
        featuredProducts: [FeaturedProducts]
        product(id: Int!): Product
    }
`


const resolvers = {
    Query: {
        categories: async () => {
            const snapshot = await db
                .collection('categories')
                .get();
            return snapshot.docs.map(doc => {
                return doc.data()
            }) as Category[]
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
        },
        featuredProducts: async () => {
            const snapshot = await db
                .collection('categories')
                .get();
            const data = snapshot.docs.map(doc => {
                return doc.data()
            }) as Category[]
            let products = new Set();
            for (const category of data) {
                if (category.items.length > 0) {
                    const randomIndex = Math.floor(Math.random() * category.items.length);
                    products.add(category.items[randomIndex]);
                    if (products.size === 4) break;
                }
            }
            return Array.from(products);
        },
        product: async (_: any, { id }) => {
            const snapshot = await db
                .collection('categories')
                .get();
            let product
            snapshot.docs.forEach(doc => {
                const items = doc.data().items;
                const matchingItem = items.find(item => item.id === id)
                if (matchingItem) {
                    product = matchingItem
                }
            });
            return product;
            // return snapshot,.docs.map(doc => doc.data())
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