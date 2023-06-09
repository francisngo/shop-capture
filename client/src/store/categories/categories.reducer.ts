import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { gql,} from '@apollo/client';
import { client } from '../../index';

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

export interface CategoriesState {
    isSearchOpen: boolean;
    loading: boolean;
    error: string | null;
    categoriesMap: { [key: string]: CategoryItem[] };
}

const CATEGORIES_INITIAL_STATE: CategoriesState = {
    isSearchOpen: false,
    loading: false,
    error: null,
    categoriesMap: {},
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

export const fetchCategories = createAsyncThunk(
	'categories/fetchCategories',
	async () => {
		const { data } = await client.query({
            query: CATEGORIES,
          });
          return data.categories;
	}
);

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: CATEGORIES_INITIAL_STATE,
    reducers: {
        setIsSearchOpen: (state, action) => {
            state.isSearchOpen = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true;
                state.error =null;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categoriesMap = action.payload.reduce(
                    (
                        acc: { [key: string]: CategoryItem[] },
                        category: Category
                    ) => {
                        const { title, items } = category;
                        acc[title.toLowerCase()] = items;
                        return acc;
                    },
                    {}
                );
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch categories';
            });
    }
});

export const { setIsSearchOpen } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;