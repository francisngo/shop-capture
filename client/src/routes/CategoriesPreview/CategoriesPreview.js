import { useContext } from "react";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
import Spinner from "../../components/Spinner/Spinner";
import { CategoriesContext } from "../../contexts/CategoriesContext";

const CategoriesPreview = () => {
	const { categoriesMap, loading } = useContext(CategoriesContext);

	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				Object.keys(categoriesMap).map((title) => {
					const products = categoriesMap[title];
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
