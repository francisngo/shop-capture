import { createContext, useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

export const CategoriesContext = createContext({
	categoriesMap: {},
	setCategories: () => {},
});

const CATEGORIES = gql`
	query Query {
		categories {
			title
			items {
				id
				name
				imageUrl
				altImg
				price
				priceId
			}
		}
	}
`;

export const CategoriesProvider = ({ children }) => {
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
		}
	}, [data]);

	const value = {
		loading,
		error,
		categoriesMap,
	};

	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	);
};
