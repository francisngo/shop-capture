import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
	isCartOpen: false,
	toggleCart: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	clearItemFromCart: () => {},
	cartCount: 0,
	cartTotal: 0,
});

const addCartItem = (cartItems, productToAdd) => {
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

const removeCartItem = (cartItems, productToRemove) => {
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

const clearCartItem = (cartItems, productToClear) =>
	cartItems.filter((cartItem) => cartItem.id !== productToClear.id);

const getQuantity = (cartItems, item) => {
	const product = cartItems.find((cartItem) => cartItem.id === item.id);
	return product ? product.quantity : 0;
};

export const CartProvider = ({ children }) => {
	const [isCartOpen, toggleCart] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const [cartTotal, setCartTotal] = useState(0);

	useEffect(() => {
		const newCartCount = cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity,
			0
		);
		setCartCount(newCartCount);
	}, [cartItems]);

	useEffect(() => {
		const newTotalPrice = cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity * cartItem.price,
			0
		);
		setCartTotal(newTotalPrice);
	}, [cartItems]);

	const addItemToCart = (productToAdd) =>
		setCartItems(addCartItem(cartItems, productToAdd));

	const removeItemFromCart = (productToRemove) =>
		setCartItems(removeCartItem(cartItems, productToRemove));

	const clearItemFromCart = (productToClear) =>
		setCartItems(clearCartItem(cartItems, productToClear));

	const getProductQuantity = (product) => {
		return getQuantity(cartItems, product);
	};

	const value = {
		isCartOpen,
		toggleCart,
		cartItems,
		addItemToCart,
		removeItemFromCart,
		clearItemFromCart,
		cartCount,
		cartTotal,
		getProductQuantity,
	};

	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};
