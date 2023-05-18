import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
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
	const { name, imageUrl, price, quantity } = cartItem;
	const { clearItemFromCart, addItemToCart, removeItemFromCart } =
		useContext(CartContext);

	const clearItemFromCartHandler = () => clearItemFromCart(cartItem);
	const addItemToCartHandler = () => addItemToCart(cartItem);
	const removeItemToCartHandler = () => removeItemFromCart(cartItem);

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
