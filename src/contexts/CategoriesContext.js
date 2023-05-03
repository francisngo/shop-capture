import { createContext, useState, useEffect } from "react";
import {
	getCategoriesAndDocuments,
	addCollectionAndDocuments,
} from "../utils/firebase/firebase.utils";

import SHOP_DATA from "../shop-data";

export const CategoriesContext = createContext({
	categoriesMap: {},
	setCategories: () => {},
});

export const CategoriesProvider = ({ children }) => {
	const [categoriesMap, setCategoriesMap] = useState({});

	useEffect(() => {
		addCollectionAndDocuments("categories", SHOP_DATA);
	}, []);

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMaps = await getCategoriesAndDocuments();
			setCategoriesMap(categoryMaps);
		};
		getCategoriesMap();
	}, []);

	const value = { categoriesMap };
	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	);
};
