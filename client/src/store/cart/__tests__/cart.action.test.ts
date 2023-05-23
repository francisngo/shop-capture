import {
    addCartItem,
    removeCartItem,
    clearCartItem,
    getProductQuantity,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
} from '../cart.action';
import { CartItem, CART_ACTION_TYPES} from '../cart.types';

  describe('Cart actions', () => {
    const mockCartItems: CartItem[] = [{ id: 1, name: 'Product', quantity: 1 }];
  
    describe('addCartItem', () => {
      it('should add a new item to the cart', () => {
        const productToAdd = { id: 2, name: 'New Product' };
        const newCartItems = addCartItem(mockCartItems, productToAdd);
  
        expect(newCartItems).toEqual([
          ...mockCartItems,
          { ...productToAdd, quantity: 1 },
        ]);
      });
  
      it('should increase the quantity of an existing item in the cart', () => {
        const productToAdd = { id: 1, name: 'Product' };
        const newCartItems = addCartItem(mockCartItems, productToAdd);
  
        expect(newCartItems).toEqual([
          { id: 1, name: 'Product', quantity: 2 },
        ]);
      });
    });
  
    describe('removeCartItem', () => {
      it('should remove an item from the cart', () => {
        const productToRemove = { id: 1, name: 'Product' };
        const newCartItems = removeCartItem(mockCartItems, productToRemove);
  
        expect(newCartItems).toEqual([]);
      });
  
      it('should decrease the quantity of an existing item in the cart', () => {
        const productToRemove = { id: 1, name: 'Product' };
        const updatedCartItems = [
          { id: 1, name: 'Product', quantity: 3 },
        ];
        const newCartItems = removeCartItem(updatedCartItems, productToRemove);
  
        expect(newCartItems).toEqual([
          { id: 1, name: 'Product', quantity: 2 },
        ]);
      });
    });
  
    describe('clearCartItem', () => {
      it('should clear an item from the cart', () => {
        const productToClear = { id: 1, name: 'Product' };
        const newCartItems = clearCartItem(mockCartItems, productToClear);
  
        expect(newCartItems).toEqual([]);
      });
    });
  
    describe('getProductQuantity', () => {
      it('should return the quantity of a product in the cart', () => {
        const item = { id: 1, name: 'Product' };
        const quantity = getProductQuantity(mockCartItems, item);
  
        expect(quantity).toBe(1);
      });
  
      it('should return 0 if the product is not in the cart', () => {
        const item = { id: 2, name: 'Non-existent Product' };
        const quantity = getProductQuantity(mockCartItems, item);
  
        expect(quantity).toBe(0);
      });
    });
  
    describe('setIsCartOpen', () => {
      it('should create an action to set the isCartOpen value', () => {
        const boolean = true;
        const action = setIsCartOpen(boolean);
  
        expect(action).toEqual({
          type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
          payload: boolean,
        });
      });
    });
  
    describe('addItemToCart', () => {
      it('should create an action to add an item to the cart', () => {
        const productToAdd = { id: 2, name: 'New Product' };
        const action = addItemToCart(mockCartItems, productToAdd);
  
        expect(action).toEqual({
          type: CART_ACTION_TYPES.SET_CART_ITEMS,
          payload: [
            ...mockCartItems,
            { ...productToAdd, quantity: 1 },
          ],
        });
      });
    });
  
    describe('removeItemFromCart', () => {
      it('should create an action to remove an item from the cart', () => {
        const productToRemove = { id: 1, name: 'Product' };
        const action = removeItemFromCart(mockCartItems, productToRemove);
  
        expect(action).toEqual({
          type: CART_ACTION_TYPES.SET_CART_ITEMS,
          payload: [],
        });
      });
    });
  
    describe('clearItemFromCart', () => {
      it('should create an action to clear an item from the cart', () => {
        const productToClear = { id: 1, name: 'Product' };
        const action = clearItemFromCart(mockCartItems, productToClear);
  
        expect(action).toEqual({
          type: CART_ACTION_TYPES.SET_CART_ITEMS,
          payload: [],
        });
      });
    });
  });