import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../contexts/CartContext";
import "./CartDropdown.scss";

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => navigate("/checkout");

	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.length ? (
					cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} cartItem={cartItem} />
					))
				) : (
					<span className="empty-message">Your cart is empty</span>
				)}
			</div>
			<Button onClick={goToCheckoutHandler}>Go To Checkout</Button>
		</div>
	);
};

export default CartDropdown;
