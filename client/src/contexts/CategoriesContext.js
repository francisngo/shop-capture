import { createContext, useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

export const CategoriesContext = createContext({
	categoriesMap: {},
	featuredProducts: [],
	setCategories: () => {},
});

const CATEGORIES = gql`
	query Query {
		categories {
			title
			items {
				id
				imageUrl
				price
				name
			}
		}
	}
`;

export const CategoriesProvider = ({ children }) => {
	const [featuredProducts, setFeaturedProducts] = useState([]);
	const [categoriesMap, setCategoriesMap] = useState({});
	const { loading, error, data } = useQuery(CATEGORIES);

	useEffect(() => {
		if (data) {
			const { categories } = data;
			const categoriesData = categories.reduce((acc, category) => {
				const { title, items } = category;
				acc[title.toLowerCase()] = items;
				return acc;
			}, {});
			setCategoriesMap(categoriesData);
			getFeaturedProducts(categoriesData);
		}
	}, [data]);

	const getFeaturedProducts = (categoriesMap) => {
		const featured = [];
		const categories = Object.keys(categoriesMap);
		// limit featured products to a list of 4
		while (featured.length < 4 && categories.length > 0) {
			// select a random category to be featured
			const randomKeyIndex = Math.floor(
				Math.random() * categories.length
			);
			const randomKey = categories[randomKeyIndex];
			const products = categoriesMap[randomKey];

			if (products.length > 0) {
				// select a random product from each category to be featured product
				const randomIndex = Math.floor(Math.random() * products.length);
				const randomProduct = products[randomIndex];
				featured.push(randomProduct);
			}
		}
		setFeaturedProducts(featured);
	};

	const getProductById = (id) => {
		const { categories } = data;
		for (const category in categoriesMap) {
			const products = categoriesMap[category];

			for (const product of products) {
				if (product.id === id) {
					// setProduct(product);
				}
			}
		}
	};

	const value = {
		loading,
		error,
		categoriesMap,
		featuredProducts,
		getProductById,
	};

	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	);
};
