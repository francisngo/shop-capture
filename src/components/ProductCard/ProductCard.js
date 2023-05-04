import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import Button, { BUTTON_TYPES_CLASSES } from "../Button/Button";

import {
	ProductCartContainer,
	Footer,
	Name,
	Price,
} from "./ProductCard.styles";

const ProductCard = ({ product }) => {
	const dispatch = useDispatch();
	const { name, price, imageUrl } = product;
	const cartItems = useSelector(selectCartItems);

	const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

	return (
		<ProductCartContainer>
			<img src={`${imageUrl}`} alt={`${name}`} />
			<Footer>
				<Name>{name}</Name>
				<Price>{`$${price}`}</Price>
				<Button
					buttonType={BUTTON_TYPES_CLASSES.inverted}
					onClick={addProductToCart}
				>
					Add To Cart
				</Button>
			</Footer>
		</ProductCartContainer>
	);
};

export default ProductCard;
