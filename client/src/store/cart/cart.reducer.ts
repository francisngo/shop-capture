import { createSlice } from '@reduxjs/toolkit';

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

export interface CartState {
	isCartOpen: boolean;
	cartItems: CartItem[];
}

const CART_INITIAL_STATE: CartState = {
	isCartOpen: false,
	cartItems: [],
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
		},
		removeItemFromCart: (state, action) => {
			state.cartItems = removeCartItem(state.cartItems, action.payload);
		},
		clearItemFromCart: (state, action) => {
			state.cartItems = clearCartItem(state.cartItems, action.payload);
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

// export const cartReducer = (state = CART_INITIAL_STATE, action: AnyAction) => {
// 	const { type, payload } = action;

// 	switch (type) {
// 		case CART_ACTION_TYPES.SET_CART_ITEMS:
// 			return {
// 				...state,
// 				cartItems: payload,
// 			};
// 		case CART_ACTION_TYPES.SET_IS_CART_OPEN:
// 			return {
// 				...state,
// 				isCartOpen: payload,
// 			};
// 		default:
// 			return state;
// 	}
// };