import { useContext } from "react";
import Button, { BUTTON_TYPES_CLASSES } from "../Button/Button";
import { CartContext } from "../../contexts/CartContext";

import {
	ProductCartContainer,
	Footer,
	Name,
	Price,
} from "./ProductCard.styles";

const ProductCard = ({ product }) => {
	const { addItemToCart } = useContext(CartContext);
	const { name, price, imageUrl } = product;

	const addProductToCart = () => addItemToCart(product);

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
