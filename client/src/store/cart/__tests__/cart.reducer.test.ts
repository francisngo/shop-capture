import {
	addCartItem,
	removeCartItem,
	clearCartItem,
	getProductQuantity,
	CartItem,
} from "../cart.reducer";

describe("Cart actions", () => {
	const mockCartItems: CartItem[] = [{ id: 1, name: "Product", quantity: 1, price: 10 }];

	describe("addCartItem", () => {
		it("should add a new item to the cart", () => {
			const productToAdd = { id: 2, name: "New Product", price: 10 };
			const newCartItems = addCartItem(mockCartItems, productToAdd);

			expect(newCartItems).toEqual([
				...mockCartItems,
				{ ...productToAdd, quantity: 1 },
			]);
		});

		it("should increase the quantity of an existing item in the cart", () => {
			const productToAdd = { id: 1, name: "Product", price: 10 };
			const newCartItems = addCartItem(mockCartItems, productToAdd);

			expect(newCartItems).toEqual([
				{ id: 1, name: "Product", quantity: 2, price: 10 },
			]);
		});
	});

	describe("removeCartItem", () => {
		it("should remove an item from the cart", () => {
			const productToRemove = { id: 1, name: "Product", price: 10 };
			const newCartItems = removeCartItem(mockCartItems, productToRemove);

			expect(newCartItems).toEqual([]);
		});

		it("should decrease the quantity of an existing item in the cart", () => {
			const productToRemove = { id: 1, name: "Product", price: 10 };
			const updatedCartItems = [{ id: 1, name: "Product", quantity: 3, price: 10 }];
			const newCartItems = removeCartItem(
				updatedCartItems,
				productToRemove
			);

			expect(newCartItems).toEqual([
				{ id: 1, name: "Product", quantity: 2, price: 10 },
			]);
		});
	});

	describe("clearCartItem", () => {
		it("should clear an item from the cart", () => {
			const productToClear = { id: 1, name: "Product", price: 10 };
			const newCartItems = clearCartItem(mockCartItems, productToClear);

			expect(newCartItems).toEqual([]);
		});
	});

	describe("getProductQuantity", () => {
		it("should return the quantity of a product in the cart", () => {
			const item = { id: 1, name: "Product", price: 10 };
			const quantity = getProductQuantity(mockCartItems, item);

			expect(quantity).toBe(1);
		});

		it("should return 0 if the product is not in the cart", () => {
			const item = { id: 2, name: "Non-existent Product", price: 10 };
			const quantity = getProductQuantity(mockCartItems, item);

			expect(quantity).toBe(0);
		});
	});
});
