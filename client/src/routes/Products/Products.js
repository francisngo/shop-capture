import { useContext } from "react";
import { useParams } from "react-router-dom";
import ProductPreview from "../../components/ProductPreview/ProductPreview";
import Spinner from "../../components/Spinner/Spinner";
import { CategoriesContext } from "../../contexts/CategoriesContext";

import "./Products.scss";

const Products = () => {
	const { category } = useParams();
	const { categoriesMap, loading } = useContext(CategoriesContext);
	const products = categoriesMap[category] || [];

	return (
		<div className="products-container">
			{/* <div className="left">
				<div classname="filter-item">
					<h2>Product Categories</h2>
					<div className="input-item">
						<input type="checkbox" id="1" value={1} />
						<label htmlFor="1">Cameras</label>
					</div>
					<div className="input-item">
						<input type="checkbox" id="2" value={2} />
						<label htmlFor="1">Lenses</label>
					</div>
					<div className="input-item">
						<input type="checkbox" id="3" value={3} />
						<label htmlFor="1">Filters</label>
					</div>
				</div>
				<div classname="filter-item">
					<h2>Filter by price</h2>
					<div className="input-item">
						<span>0</span>
						<input
							type="range"
							min={0}
							max={10000}
							onChange={(e) => setMaxPrice(e.target.value)}
						/>
						<span>10000</span>
					</div>
				</div>
				<div classname="filter-item">
					<h2>Sort by</h2>
					<div className="input-item">
						<input
							type="radio"
							id="asc"
							value="asc"
							name="price"
							onChange={(e) => setSort("asc")}
						/>
						<label htmlFor="asc">Price (Lowest first)</label>
					</div>
					<div className="input-item">
						<input
							type="radio"
							id="desc"
							value="desc"
							name="price"
							onChange={(e) => setSort("desc")}
						/>
						<label htmlFor="desc">Price (Highest first)</label>
					</div>
				</div>
			</div> */}
			<div className="right">
				<img
					className="category-image"
					src="https://images.pexels.com/photos/16828894/pexels-photo-16828894.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
					alt=""
				/>
				<div className="list-container">
					{loading ? (
						<Spinner />
					) : (
						<>
							{products.map((item) => (
								<ProductPreview key={item.id} {...item} />
							))}
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Products;
