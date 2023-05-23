import { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	addItemToCart,
	removeItemFromCart,
	clearItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CartItem } from "../../store/cart/cart.types";
import {
	CheckoutItemContainer,
	ImageContainer,
	BaseSpan,
	Quantity,
	Arrow,
	Value,
	RemoveButton,
} from "./CheckoutItem.styles";

interface Props {
	cartItem: CartItem;
}

const CheckoutItem: FC<Props> = ({ cartItem }) => {
	const dispatch = useDispatch();
	const { name, imageUrl, price, quantity } = cartItem;
	const cartItems = useSelector(selectCartItems);

	const clearItemFromCartHandler = useCallback(() => {
		dispatch(clearItemFromCart(cartItems, cartItem));
	}, [cartItems, cartItem, dispatch]);

	const addItemToCartHandler = useCallback(() => {
		dispatch(addItemToCart(cartItems, cartItem));
	}, [cartItems, cartItem, dispatch]);

	const removeItemToCartHandler = useCallback(() => {
		dispatch(removeItemFromCart(cartItems, cartItem));
	}, [cartItems, cartItem, dispatch]);

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt={`${name}`} />
			</ImageContainer>
			<BaseSpan> {name} </BaseSpan>
			<Quantity>
				<Arrow onClick={removeItemToCartHandler}>&#10094;</Arrow>
				<Value>{quantity}</Value>
				<Arrow onClick={addItemToCartHandler}>&#10095;</Arrow>
			</Quantity>
			<BaseSpan>{`$${price}`}</BaseSpan>
			<RemoveButton onClick={clearItemFromCartHandler}>
				&#10005;
			</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;
