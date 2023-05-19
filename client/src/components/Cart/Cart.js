import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Button from "../Button/Button";
import { CartContext } from "../../contexts/CartContext";
import {
	CartContainer,
	Item,
	Image,
	Details,
	Delete,
	Total,
	EmptyMessage,
} from "./Cart.styles";

const Cart = () => {
	const { cartItems, cartTotal, clearItemFromCart } = useContext(CartContext);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => navigate("/checkout");
	const clearItemFromCartHandler = (cartItem) => clearItemFromCart(cartItem);

	return (
		<CartContainer>
			{cartItems.length ? (
				cartItems.map((item) => (
					<Item key={item.id}>
						<Image src={item.imageUrl} alt={item.name} />
						<Details>
							<p>{item.name}</p>
							<div className="price">
								{item.quantity} x ${item.price}
							</div>
						</Details>
						<Delete onClick={() => clearItemFromCartHandler(item)}>
							<DeleteOutlineIcon />
						</Delete>
					</Item>
				))
			) : (
				<EmptyMessage>Your cart is empty</EmptyMessage>
			)}
			<Total>
				<span>Subtotal</span>
				<span>{`$${cartTotal}`}</span>
			</Total>
			<Button onClick={goToCheckoutHandler}>Proceed To Checkout</Button>
		</CartContainer>
	);
};

export default Cart;
