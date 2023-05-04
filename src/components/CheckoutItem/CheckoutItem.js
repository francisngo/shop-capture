import { useDispatch, useSelector } from "react-redux";
import {
	addItemToCart,
	removeItemFromCart,
	clearItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
	CheckoutItemContainer,
	ImageContainer,
	BaseSpan,
	Quantity,
	Arrow,
	Value,
	RemoveButton,
} from "./CheckoutItem.styles";

const CheckoutItem = ({ cartItem }) => {
	const dispatch = useDispatch();
	const { name, imageUrl, price, quantity } = cartItem;
	const cartItems = useSelector(selectCartItems);

	const clearItemFromCartHandler = () =>
		dispatch(clearItemFromCart(cartItems, cartItem));
	const addItemToCartHandler = () =>
		dispatch(addItemToCart(cartItems, cartItem));
	const removeItemToCartHandler = () =>
		dispatch(removeItemFromCart(cartItems, cartItem));

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
