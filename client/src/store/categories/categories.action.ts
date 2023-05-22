import { CATEGORIES_ACTION_TYPES, Category} from './categories.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setCategories = (categories: Category[]) => {
    createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);
};

export const setIsSearchOpen = (boolean: boolean) => 
    createAction(CATEGORIES_ACTION_TYPES.SET_IS_SEARCH_OPEN, boolean);