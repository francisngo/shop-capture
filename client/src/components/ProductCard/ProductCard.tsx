import { FC } from 'react';
import { Link } from "react-router-dom";
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
}

const ProductCard: FC<ProductCardProps> = ({ id, imageUrl, altImg, name, price }) => {
	const oldPrice = Math.round(price * 1.25);

	return (
		<Link to={`/product/${id}`}>
			<ProductCardContainer>
				<ImageContainer>
					<img className="primary" src={imageUrl} />
					<img className="secondary" src={altImg} />
				</ImageContainer>
				<Name>{name}</Name>
				<Prices>
					<h3>{`$${oldPrice}`}</h3>
					<h3>{`$${price}`}</h3>
				</Prices>
			</ProductCardContainer>
		</Link>
	);
};

export default ProductCard;
