import { useContext, FC } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import Spinner from "../../components/Spinner/Spinner";
import {
	CategoryItem,
	CategoriesContext,
} from "../../contexts/CategoriesContext";
import {
	ProductsContainer,
	LeftContainer,
	FilterItem,
	InputItem,
	RightContainer,
	CategoryImage,
	ListContainer,
} from "./Products.styles";

const Products: FC = () => {
	const { category = "" } = useParams<{ category: string }>();
	const { categoriesMap, loading } = useContext(CategoriesContext);
	const products: CategoryItem[] = categoriesMap[category] || [];

	const tempHide = true;

	return (
		<ProductsContainer>
			{tempHide && (
				<LeftContainer>
					<FilterItem>
						<h2>Product Categories</h2>
						<InputItem>
							<input type="checkbox" id="1" value={1} />
							<label htmlFor="1">Cameras</label>
						</InputItem>
						<InputItem>
							<input type="checkbox" id="2" value={2} />
							<label htmlFor="1">Lenses</label>
						</InputItem>
						<InputItem>
							<input type="checkbox" id="3" value={3} />
							<label htmlFor="1">Filters</label>
						</InputItem>
					</FilterItem>
					<FilterItem>
						<h2>Filter by price</h2>
						<InputItem>
							<span>0</span>
							<input type="range" min={0} max={10000} />
							<span>10000</span>
						</InputItem>
					</FilterItem>
					<FilterItem>
						<h2>Sort by</h2>
						<InputItem>
							<input
								type="radio"
								id="asc"
								value="asc"
								name="price"
							/>
							<label htmlFor="asc">Price (Lowest first)</label>
						</InputItem>
						<InputItem>
							<input
								type="radio"
								id="desc"
								value="desc"
								name="price"
							/>
							<label htmlFor="desc">Price (Highest first)</label>
						</InputItem>
					</FilterItem>
				</LeftContainer>
			)}
			<RightContainer>
				<CategoryImage
					src="https://images.pexels.com/photos/16828894/pexels-photo-16828894.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
					alt="product-banner"
				/>
				<ListContainer>
					{loading ? (
						<Spinner />
					) : (
						<>
							{products.map((item) => (
								<ProductCard key={item.id} {...item} />
							))}
						</>
					)}
				</ListContainer>
			</RightContainer>
		</ProductsContainer>
	);
};

export default Products;
