import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { CartContext } from "../../contexts/CartContext";
import { EmptyMessage } from "./Cart.styles";

import "./Cart.scss";

const Cart = () => {
	const { cartItems, cartTotal } = useContext(CartContext);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => navigate("/cart");

	return (
		<div className="cart-container">
			{cartItems.length ? (
				cartItems.map((item) => (
					<div className="item" key={item.id}>
						<img src={item.imageUrl} alt={item.name} />
						<div className="details">
							<p>{item.name}</p>
							<div className="price">
								{item.quantity} x ${item.price}
							</div>
						</div>
					</div>
				))
			) : (
				<EmptyMessage>Your cart is empty</EmptyMessage>
			)}
			<div className="total">
				<span>Subtotal</span>
				<span>{`$${cartTotal}`}</span>
			</div>
			<Button onClick={goToCheckoutHandler}>Proceed To Checkout</Button>
		</div>
	);
};

export default Cart;
