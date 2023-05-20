export interface CategoryItem {
	id: number;
	name: string;
	imageUrl: string;
	altImg: string;
	price: number;
	priceId: string;
}

export interface Category {
	title: string;
	items: CategoryItem[];
}

export interface CategoryMap {
    [key: string]: CategoryItem[]
}

export const CATEGORIES_ACTION_TYPES = {
    SET_CATEGORIES: 'categories/SET_CATEGORIES',
}