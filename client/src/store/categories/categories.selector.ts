import { createSelector } from 'reselect';
import { RootState } from '../store';
import { CategoryItem, Category } from './categories.types';

const selectCategoryReducer = (state: RootState) => state.categories;

export const reselectCategories = createSelector(
    [selectCategoryReducer],
    (categories) => categories.categories
)

export const selectCategories = createSelector(
    [reselectCategories],
    (categories) => 
        categories.reduce((acc: { [key: string]: CategoryItem[]}, category: Category) => {
            const { title, items } = category;
            acc[title.toLowerCase()] = items;
            return acc;
        })
)