import { useSelector } from "react-redux";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
import Spinner from "../../components/Spinner/Spinner";
import {
	selectCategories,
	selectCategoriesIsLoading,
} from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
	const categories = useSelector(selectCategories);
	const isLoading = useSelector(selectCategoriesIsLoading);
	return (
		<>
			{isLoading ? (
				<Spinner />
			) : (
				Object.keys(categories).map((title) => {
					const products = categories[title];
					return (
						<CategoryPreview
							key={title}
							title={title}
							products={products}
						/>
					);
				})
			)}
		</>
	);
};

export default CategoriesPreview;
