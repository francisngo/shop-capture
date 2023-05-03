import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";
import { selectCategories } from "../../store/categories/categories.selector";

import { CategoryContainer, CategoryTitle } from "./Category.styles";

const Category = () => {
	const { category } = useParams();
	const categories = useSelector(selectCategories);
	const [products, setProducts] = useState(categories[category]);

	useEffect(() => {
		setProducts(categories[category]);
	}, [category, categories]);

	return (
		<>
			<CategoryTitle>{category.toUpperCase()}</CategoryTitle>
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
