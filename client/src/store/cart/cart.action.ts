import { CART_ACTION_TYPES, Product, CartItem } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

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

export const setIsCartOpen = (boolean: boolean) =>
	createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems: CartItem[], productToAdd: Product) => {
	const newCartItems = addCartItem(cartItems, productToAdd);
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems: CartItem[], productToRemove: Product) => {
	const newCartItems = removeCartItem(cartItems, productToRemove);
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems: CartItem[], productToClear: Product) => {
	const newCartItems = clearCartItem(cartItems, productToClear);
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};