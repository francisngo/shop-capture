import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Button from "../Button/Button";
import { CartContext } from "../../contexts/CartContext";
import { EmptyMessage } from "./Cart.styles";
import "./Cart.scss";

const Cart = () => {
	const { cartItems, cartTotal, clearItemFromCart } = useContext(CartContext);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => navigate("/checkout");
	const clearItemFromCartHandler = (cartItem) => clearItemFromCart(cartItem);

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
						<div
							className="delete"
							onClick={() => clearItemFromCartHandler(item)}
						>
							<DeleteOutlineIcon />
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
