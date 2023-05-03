import { createSelector } from "reselect";

/*
 * selector is where we take the raw data from google firestore,
 * "getCategoriesAndDocuments", and we map it for the redux store
 * previously the map/reduce occurred inside the firestore function
 *
 * Note - Array.reduce() always returns a new object even
 * when there is no categories fetched - this causes redux to trigger
 * unnecessary re-renders - to resolve this, we can use reselect
 * library (memoization)
 */

// this triggers whenever there is an update to the state in redux store
const selectCategoryReducer = (state) => state.categories;

// this triggers when there is a change to categories state in redux store
export const reselectCategories = createSelector(
	[selectCategoryReducer],
	(categories) => categories.categories
);

// this triggers and maps out the categories for the redux store
export const selectCategories = createSelector(
	[reselectCategories],
	(categories) =>
		categories.reduce((acc, { title, items }) => {
			acc[title.toLowerCase()] = items;
			return acc;
		}, {})
);
