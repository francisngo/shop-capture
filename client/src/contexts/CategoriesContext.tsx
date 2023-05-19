import { createContext, useState, useEffect, ReactNode } from "react";
import { gql, useQuery, QueryResult } from "@apollo/client";

interface CategoryItem {
	id: number;
	name: string;
	imageUrl: string;
	altImg: string;
	price: number;
	priceId: string;
}

interface Category {
	title: string;
	items: CategoryItem[];
}

interface CategoriesContextType {
	loading: boolean;
	error: Error | undefined;
	categoriesMap: { [key: string]: CategoryItem[] };
}

interface CategoriesProviderProps {
	children: ReactNode;
}

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

export const CategoriesContext = createContext<CategoriesContextType>({
	loading: false,
    error: undefined,
    categoriesMap: {},
});


export const CategoriesProvider = ({ children }: CategoriesProviderProps) => {
	const [categoriesMap, setCategoriesMap] = useState<{ [key: string]: CategoryItem[] }>({});
	const { loading, error, data }: QueryResult<any, Record<string, any>> = useQuery(CATEGORIES);

	useEffect(() => {
		if (data) {
			const { categories }: { categories: Category[] } = data;
			const categoriesData = categories.reduce((acc: { [key: string]: CategoryItem[] }, category: Category) => {
				const { title, items } = category;
				acc[title.toLowerCase()] = items;
				return acc;
			}, {});
			setCategoriesMap(categoriesData);
		}
	}, [data]);

	const value: CategoriesContextType = {
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
