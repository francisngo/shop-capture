import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import { createAction, ActionWithPayload, withMatcher } from "../../utils/reducer/reducer.utils";
import { CategoryItem } from '../categories/categories.types';

const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
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

const removeCartItem = (cartItems: CartItem[], productToRemove: CategoryItem): CartItem[] => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToRemove.id
	);

	if (existingCartItem && existingCartItem.quantity === 1) {
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

const clearCartItem = (cartItems: CartItem[], productToClear: CartItem) =>
	cartItems.filter((cartItem) => cartItem.id !== productToClear.id);

export type SetCartIsOpen = ActionWithPayload<
	CART_ACTION_TYPES.SET_IS_CART_OPEN,
	boolean
>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export const setIsCartOpen = withMatcher((boolean: boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
);

export const setCartItems = withMatcher((cartItems: CartItem[]) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const addItemToCart = (cartItems: CartItem[], productToAdd: CategoryItem) => {
	const newCartItems = addCartItem(cartItems, productToAdd);
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems: CartItem[], productToRemove: CategoryItem) => {
	const newCartItems = removeCartItem(cartItems, productToRemove);
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems: CartItem[], productToClear: CartItem) => {
	const newCartItems = clearCartItem(cartItems, productToClear);
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
