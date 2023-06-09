import { createSelector } from 'reselect';
import { RootState } from '../store';
import { CategoryItem } from './categories.reducer';

const selectCategoryReducer = (state: RootState) => state.categories;

export const reselectCategories = createSelector(
    [selectCategoryReducer],
    (categories) => categories.categoriesMap
)

export const selectCategories = createSelector(
    [reselectCategories],
    (categoriesMap) => 
        Object.entries(categoriesMap).reduce(
            (
                acc: { [key: string]: CategoryItem[] }, 
                [title, items]
            ) => {
                acc[title.toLowerCase()] = items;
                return acc;
            },
            {}
        )
);

export const selectLoading = createSelector(
    [selectCategoryReducer],
    (categories) => categories.loading
);

export const selectIsSearchOpen = createSelector(
    [selectCategoryReducer],
    (categories) => categories.isSearchOpen
)