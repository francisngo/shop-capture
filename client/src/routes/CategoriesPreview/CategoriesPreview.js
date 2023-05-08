import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
import Spinner from "../../components/Spinner/Spinner";
import { fetchCategoriesStart } from "../../store/categories/categories.action";
import {
	selectCategories,
	selectCategoriesIsLoading,
} from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
	const dispatch = useDispatch();
	const categories = useSelector(selectCategories);
	const isLoading = useSelector(selectCategoriesIsLoading);

	useEffect(() => {
		dispatch(fetchCategoriesStart());
	}, [dispatch]);

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
