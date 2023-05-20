import { CATEGORIES_ACTION_TYPES, Category} from './categories.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setCategories = (categories: Category[]) => {
    createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);
};