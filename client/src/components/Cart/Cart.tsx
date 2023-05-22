import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Button from "../Button/Button";
import {
	selectCartItems,
	selectCartTotal,
} from "../../store/cart/cart.selector";
import { clearItemFromCart, setIsCartOpen } from "../../store/cart/cart.action";
import { CartItem } from "../../store/cart/cart.types";
import {
	CartContainer,
	CartItems,
	Item,
	Image,
	Details,
	Delete,
	Total,
	EmptyMessage,
	ButtonContainer,
} from "./Cart.styles";

const Cart: FC = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		dispatch(setIsCartOpen(false));
		navigate("/checkout");
	};

	const clearItemFromCartHandler = (cartItem: CartItem) =>
		dispatch(clearItemFromCart(cartItems, cartItem));

	return (
		<CartContainer>
			<CartItems>
				{cartItems.length ? (
					(cartItems as CartItem[]).map((item: CartItem) => (
						<Item key={item.id}>
							<Image src={item.imageUrl} alt={item.name} />
							<Details>
								<p>{item.name}</p>
								<div className="price">
									{item.quantity} x ${item.price}
								</div>
							</Details>
							<Delete
								onClick={() => clearItemFromCartHandler(item)}
							>
								<DeleteOutlineIcon />
							</Delete>
						</Item>
					))
				) : (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				)}
			</CartItems>
			<Total>
				<span>Subtotal</span>
				<span>{`$${cartTotal}`}</span>
			</Total>
			<ButtonContainer>
				<Button onClick={goToCheckoutHandler}>View Cart</Button>
			</ButtonContainer>
		</CartContainer>
	);
};

export default Cart;
