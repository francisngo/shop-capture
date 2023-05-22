import { FC } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
	ProductCardContainer,
	ImageContainer,
	Name,
	Prices,
} from "./ProductCard.styles";

interface ProductCardProps {
	id: number;
	imageUrl: string;
	altImg: string;
	name: string;
	price: number;
	priceId: string;
}

const ProductCard: FC<ProductCardProps> = ({
	id,
	imageUrl,
	altImg,
	name,
	price,
	priceId,
}) => {
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);
	const product = { id, imageUrl, altImg, name, price, priceId };

	const addProductToCart = () => {
		dispatch(addItemToCart(cartItems, product));
	};
	return (
		<ProductCardContainer>
			<Link to={`/product/${id}`}>
				<ImageContainer>
					<img className="primary" src={imageUrl} />
					<img className="secondary" src={altImg} />
				</ImageContainer>
			</Link>
			<Name>{name}</Name>
			<Prices>
				<p>{`$${price}`}</p>
			</Prices>
			<Button onClick={addProductToCart}>Add To Cart</Button>
		</ProductCardContainer>
	);
};

export default ProductCard;
