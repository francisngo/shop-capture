import { useContext } from "react";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import Button from "../../components/Button/Button";
import { CartContext } from "../../contexts/CartContext";
import {
	CartContainer,
	CartHeader,
	HeaderBlock,
	Total,
} from "./Checkout.styles";

const Checkout = () => {
	const { cartItems, cartTotal } = useContext(CartContext);

	const handlePayment = () => {
		try {
		} catch (error) {
			console.log(error);
		}
	};

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
			<Button>Place Order</Button>
		</CartContainer>
	);
};

export default Checkout;
