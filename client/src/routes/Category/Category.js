import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import ProductCard from "../../components/ProductCard/ProductCard";
import Spinner from "../../components/Spinner/Spinner";
import { CategoryContainer, CategoryTitle } from "./Category.styles";

const CATEGORY = gql`
	query Category($title: String!) {
		category(title: $title) {
			title
			items {
				id
				name
				imageUrl
				price
			}
		}
	}
`;

const Category = () => {
	const { category } = useParams();
	const title = category.charAt(0).toUpperCase() + category.slice(1);
	const { loading, data } = useQuery(CATEGORY, {
		variables: { title },
	});
	const [products, setProducts] = useState([]);

	useEffect(() => {
		if (data) {
			const { category } = data;
			setProducts(category.items);
		}
	}, [category, data]);

	return (
		<>
			<CategoryTitle>{category.toUpperCase()}</CategoryTitle>
			{loading && <Spinner />}
			<CategoryContainer>
				{products &&
					products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</CategoryContainer>
		</>
	);
};

export default Category;
