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

	const handleCheckout = async () => {
		try {
			const products = cartItems.map((cartItem) => ({
				price: cartItem.priceId,
				quantity: cartItem.quantity,
			}));
			await fetch("http://localhost:4000/create-checkout-session", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ products }),
			})
				.then((response) => response.json())
				.then(
					(response) =>
						response.url && window.location.assign(response.url)
				);
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
			<Button onClick={handleCheckout}>Place Order</Button>
		</CartContainer>
	);
};

export default Checkout;
