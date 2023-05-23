import admin from 'firebase-admin';
import serviceAccount from '../config/service-account.json';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
});
const db = admin.firestore();

interface CategoryItem {
    id: number,
    imageUrl: string,
    altImg: string,
    name: string,
    price: number,
    priceId: string,
}

interface Category {
    title: string,
    items: [CategoryItem]
}

export default {
    Query: {
        categories: async () => {
            const snapshot = await db
                .collection('categories')
                .get();
            return snapshot.docs.map(doc => {
                return doc.data()
            }) as Category[]
        },
        category: async (_: any, { title }: { title: string }) => {
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
        product: async (_: any, { id }: { id: number }) => {
            const snapshot = await db
                .collection('categories')
                .get();
            let product
            snapshot.docs.forEach(doc => {
                const items = doc.data().items;
                const matchingItem = items.find((item: CategoryItem) => item.id === id)
                if (matchingItem) {
                    product = matchingItem;
                }
            });
            return product;
        }
    }
}