import { useContext } from "react";
import Button from "../Button/Button";
import { CartContext } from "../../contexts/CartContext";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
	const { addItemToCart } = useContext(CartContext);
	console.log("product: ", product);
	const { name, price, imageUrl } = product;

	const addProductToCart = () => addItemToCart(product);

	return (
		<div className="product-card-container">
			<img src={`${imageUrl}`} alt={`${name}`} />
			<div className="footer">
				<span className="name">{name}</span>
				<span className="price">{`$${price}`}</span>
				<Button buttonType="inverted" onClick={addProductToCart}>
					Add To Cart
				</Button>
			</div>
		</div>
	);
};

export default ProductCard;
