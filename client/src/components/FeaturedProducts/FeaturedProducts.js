import { useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import ProductPreview from "../ProductPreview/ProductPreview";
import Spinner from "../Spinner/Spinner";
import "./FeaturedProducts.scss";

const FEATURED_PRODUCTS = gql`
	query Query {
		featuredProducts {
			price
			name
			imageUrl
			altImg
			id
		}
	}
`;

const FeaturedProducts = () => {
	const { loading, data } = useQuery(FEATURED_PRODUCTS);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		if (data) {
			const { featuredProducts } = data;
			setProducts(featuredProducts);
		}
	});

	return (
		<div className="featured-products">
			<div className="top">
				<h2>Featured Products</h2>
			</div>
			<div className="bottom">
				{loading ? (
					<Spinner />
				) : (
					products.map((props) => (
						<ProductPreview key={props.id} {...props} />
					))
				)}
			</div>
		</div>
	);
};

export default FeaturedProducts;
