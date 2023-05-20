export interface Product {
	id: number;
	name: string;
	imageUrl: string;
	altImg: string;
	price: number;
	priceId: string;
}

export interface CartItem extends Product {
	quantity: number;
}
export enum CART_ACTION_TYPES {
	SET_IS_CART_OPEN = "cart/SET_IS_CART_OPEN",
	SET_CART_ITEMS = "cart/SET_CART_ITEMS",
};