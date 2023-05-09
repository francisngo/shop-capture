import { useContext } from "react";
import Button, { BUTTON_TYPES_CLASSES } from "../Button/Button";
import { CartContext } from "../../contexts/CartContext";
import {
	ProductCardContainer,
	Footer,
	Name,
	Price,
} from "./ProductCard.styles";

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	const { cartItems, addItemToCart } = useContext(CartContext);

	const addProductToCart = () => addItemToCart(cartItems, product);

	return (
		<ProductCardContainer>
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
		</ProductCardContainer>
	);
};

export default ProductCard;
