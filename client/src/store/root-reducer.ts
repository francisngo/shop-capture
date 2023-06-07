import { combineReducers } from '@reduxjs/toolkit';

import { userReducer } from './user/user.reducer';
import { cartReducer } from './cart/cart.reducer';
import { categoriesReducer } from './categories/categories.reducer';

export const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    categories: categoriesReducer,
});