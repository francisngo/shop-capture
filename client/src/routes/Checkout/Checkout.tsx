import { FC } from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import Button from "../../components/Button/Button";
import {
	selectCartItems,
	selectCartTotal,
} from "../../store/cart/cart.selector";
import { CartItem } from "../../store/cart/cart.types";
import {
	CartContainer,
	CartHeader,
	HeaderBlock,
	Total,
} from "./Checkout.styles";

const Checkout: FC = () => {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);

	const handleCheckout = async () => {
		try {
			const products = cartItems.map((cartItem: CartItem) => ({
				price: cartItem.priceId,
				quantity: cartItem.quantity,
			}));
			await fetch(
				"http://localhost:4000/v1/checkout/create-checkout-session",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ products }),
				}
			)
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
			{cartItems.map((cartItem: CartItem) => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<Total>{`Total: $${cartTotal}`}</Total>
			<Button disabled={!cartItems.length} onClick={handleCheckout}>
				Purchase Order
			</Button>
		</CartContainer>
	);
};

export default Checkout;
