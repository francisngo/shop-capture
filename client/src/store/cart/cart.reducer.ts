import { createSlice } from '@reduxjs/toolkit';
import { setLocalStorage } from '../../utils/localStorage/localStorage.utils';

export interface Product {
	id: number;
	name: string;
	imageUrl?: string;
	altImg?: string;
	price: number;
	priceId?: string;
}

export interface CartItem extends Product {
	quantity: number;
}

export const addCartItem = (cartItems: CartItem[], productToAdd: Product): CartItem[] => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id
	);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const removeCartItem = (cartItems: CartItem[], productToRemove: Product): CartItem[] => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToRemove.id
	);

	if (existingCartItem?.quantity === 1) {
		return cartItems.filter(
			(cartItem) => cartItem.id !== productToRemove.id
		);
	}

	return cartItems.map((cartItem) =>
		cartItem.id === productToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};

export const clearCartItem = (cartItems: CartItem[], productToClear: Product): CartItem[] =>
	cartItems.filter((cartItem) => cartItem.id !== productToClear.id);

export const getProductQuantity = (cartItems: CartItem[], item: Product): number => {
    const product = (cartItems as CartItem[]).find(cartItem => cartItem.id === item.id);
    return product ? product.quantity : 0;
};

const localStorageCart: any[] = localStorage.getItem('cart') !== null
  ? JSON.parse(localStorage.getItem('cart') || '')
  : [];

export interface CartState {
	isCartOpen: boolean;
	cartItems: CartItem[];
}

const CART_INITIAL_STATE: CartState = {
	isCartOpen: false,
	cartItems: localStorageCart,
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState: CART_INITIAL_STATE,
	reducers: {
		setIsCartOpen: (state, action) => {
			state.isCartOpen = action.payload;
		},
		addItemToCart: (state, action) => {
			state.cartItems = addCartItem(state.cartItems, action.payload);
			setLocalStorage('cart', state.cartItems);
			// localStorage.setItem('capture-cart', JSON.stringify(state.cartItems.map(item => item)))
		},
		removeItemFromCart: (state, action) => {
			state.cartItems = removeCartItem(state.cartItems, action.payload);
			setLocalStorage('cart', state.cartItems);
			// localStorage.setItem('capture-cart', JSON.stringify(state.cartItems.map(item => item)))
		},
		clearItemFromCart: (state, action) => {
			state.cartItems = clearCartItem(state.cartItems, action.payload);
			setLocalStorage('cart', state.cartItems);
			// localStorage.setItem('capture-cart', JSON.stringify(state.cartItems.map(item => item)))
		},
	},
});

export const {
	setIsCartOpen,
	addItemToCart,
	removeItemFromCart,
	clearItemFromCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;