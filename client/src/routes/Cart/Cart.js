import { useSelector } from "react-redux";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

import {
	selectCartItems,
	selectCartTotal,
} from "../../store/cart/cart.selector";

import { CartContainer, CartHeader, HeaderBlock, Total } from "./Cart.styles";

const Checkout = () => {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);
	return (
		<CartContainer>
			<CartHeader>
				<HeaderBlock>
					<span>Product</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Description</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Quantity</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Price</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Remove</span>
				</HeaderBlock>
			</CartHeader>
			{cartItems.map((cartItem) => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<Total>{`Total: $${cartTotal}`}</Total>
		</CartContainer>
	);
};

export default Checkout;
