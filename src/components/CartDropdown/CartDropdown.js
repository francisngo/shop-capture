import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

import { selectCartItems } from "../../store/cart/cart.selector";

import {
	CartDropdownContainer,
	EmptyMessage,
	CartItems,
} from "./CartDropdown.styles.js";

const CartDropdown = () => {
	const cartItems = useSelector(selectCartItems);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => navigate("/checkout");

	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} cartItem={cartItem} />
					))
				) : (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				)}
			</CartItems>
			<Button onClick={goToCheckoutHandler}>Go To Checkout</Button>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
