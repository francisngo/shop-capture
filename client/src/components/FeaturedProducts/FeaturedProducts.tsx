import { useState, useEffect, FC } from "react";
import { gql, useQuery } from "@apollo/client";
import ProductCard from "../ProductCard/ProductCard";
import Spinner from "../Spinner/Spinner";
import {
	FeaturedProductsContainer,
	Top,
	SpinnerContainer,
	Bottom,
} from "./FeaturedProducts.styles";

interface FeaturedProduct {
	id: string;
	name: string;
	imageUrl: string;
	altImg: string;
	price: number;
	priceId: string;
}

interface FeaturedProductsData {
	featuredProducts: FeaturedProduct[];
}

const FEATURED_PRODUCTS = gql`
	query Query {
		featuredProducts {
			id
			name
			imageUrl
			altImg
			price
			priceId
		}
	}
`;

const FeaturedProducts: FC = () => {
	const { loading, data } = useQuery<FeaturedProductsData>(FEATURED_PRODUCTS);
	const [products, setProducts] = useState<FeaturedProduct[]>([]);

	useEffect(() => {
		if (data) {
			const { featuredProducts } = data;
			setProducts(featuredProducts);
		}
	});

	return (
		<FeaturedProductsContainer>
			<Top>
				<h2>Featured Products</h2>
			</Top>
			{loading ? (
				<SpinnerContainer>
					<Spinner />
				</SpinnerContainer>
			) : (
				<Bottom>
					{products.map((props) => (
						<ProductCard key={props.id} {...props} />
					))}
				</Bottom>
			)}
		</FeaturedProductsContainer>
	);
};

export default FeaturedProducts;
