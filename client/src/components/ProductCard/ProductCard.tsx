import { FC } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import { addItemToCart } from "../../store/cart/cart.reducer";
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
	const product = { id, imageUrl, altImg, name, price, priceId };

	const addProductToCart = () => {
		dispatch(addItemToCart(product));
	};
	return (
		<ProductCardContainer>
			<Link to={`/product/${id}`}>
				<ImageContainer>
					<img className="primary" src={imageUrl} alt={name} />
					<img className="secondary" src={altImg} alt={name} />
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
