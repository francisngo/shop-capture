import "./CategoryItem.scss";

const CategoryItem = ({ category }) => {
	const { id, imageUrl, title } = category;
	return (
		<div className="category-container">
			<img
				className="background-image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className="category-body-container">
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	);
};

export default CategoryItem;
