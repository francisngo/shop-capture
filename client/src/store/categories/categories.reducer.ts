import { AnyAction } from 'redux';
import { CATEGORIES_ACTION_TYPES, CategoryItem } from './categories.types';

export type CategoriesState = {
    readonly isSearchOpen: boolean;
    readonly categories: CategoryItem[]
}

export const CATEGORIES_INITIAL_STATE = {
    isSearchOpen: false,
    categories: [],
}

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action: AnyAction ) => {
    const { type, payload } = action;

    switch(type) {
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
            return {
                ...state,
                categories: payload,
            }
        case CATEGORIES_ACTION_TYPES.SET_IS_SEARCH_OPEN:
            return {
                ...state,
                isSearchOpen: payload,
            }
        default: 
            return state;
    }
};