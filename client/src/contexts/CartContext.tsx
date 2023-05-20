import { createContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from "react";

export interface Product {
	id: number;
	name: string;
	price: number;
	imageUrl: string;
}

export interface CartItem extends Product {
	quantity: number;
}

interface CartContextType {
	isCartOpen: boolean;
	toggleCart: Dispatch<SetStateAction<boolean>>;
	cartItems: CartItem[];
	addItemToCart: (productToAdd: Product) => void;
	removeItemFromCart: (productToRemove: Product) => void;
	clearItemFromCart: (productToClear: Product) => void;
	cartCount: number;
	cartTotal: number;
	getProductQuantity: (product: Product) => number;
}

interface CartProviderProps {
	children: ReactNode;
}

export const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  toggleCart: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
  getProductQuantity: () => 0,
});

const addCartItem = (cartItems: CartItem[], productToAdd: Product) => {
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

const removeCartItem = (cartItems: CartItem[], productToRemove: Product) => {
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

const clearCartItem = (cartItems: CartItem[], productToClear: Product) =>
	cartItems.filter((cartItem) => cartItem.id !== productToClear.id);

const getQuantity = (cartItems: CartItem[], item: Product) => {
	const product = (cartItems as CartItem[]).find((cartItem) => cartItem.id === item.id);
	return product ? product.quantity : 0;
};

export const CartProvider = ({ children }: CartProviderProps) => {
	const [isCartOpen, toggleCart] = useState(false);
	const [cartItems, setCartItems] = useState<CartItem[]>([]);
	const [cartCount, setCartCount] = useState(0);
	const [cartTotal, setCartTotal] = useState(0);

	useEffect(() => {
		const newCartCount = (cartItems as CartItem[]).reduce(
			(total, cartItem) => total + cartItem.quantity,
			0
		);
		setCartCount(newCartCount);
	}, [cartItems]);

	useEffect(() => {
		const newTotalPrice = (cartItems as CartItem[]).reduce(
			(total, cartItem) => total + cartItem.quantity * cartItem.price,
			0
		);
		setCartTotal(newTotalPrice);
	}, [cartItems]);

	const addItemToCart = (productToAdd: Product) =>
		setCartItems(addCartItem(cartItems, productToAdd));

	const removeItemFromCart = (productToRemove: Product) =>
		setCartItems(removeCartItem(cartItems, productToRemove));

	const clearItemFromCart = (productToClear: Product) =>
		setCartItems(clearCartItem(cartItems, productToClear));

	const getProductQuantity = (product: Product) => {
		return getQuantity(cartItems, product);
	};

	const value: CartContextType = {
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
