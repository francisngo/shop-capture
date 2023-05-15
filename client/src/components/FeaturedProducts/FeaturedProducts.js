import Product from "../Product/Product";

import "./FeaturedProducts.scss";

const FeaturedProducts = () => {
	const data = [
		{
			id: 1,
			img: "https://images.pexels.com/photos/16827633/pexels-photo-16827633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			altImg: "https://images.pexels.com/photos/16827632/pexels-photo-16827632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			title: "Fujifilm X-T5",
			oldPrice: 1799,
			price: 1649,
		},
		{
			id: 1,
			img: "https://images.pexels.com/photos/16827633/pexels-photo-16827633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			altImg: "https://images.pexels.com/photos/16827632/pexels-photo-16827632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			title: "Fujifilm X-T5",
			oldPrice: 1799,
			price: 1649,
		},
		{
			id: 1,
			img: "https://images.pexels.com/photos/16827633/pexels-photo-16827633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			altImg: "https://images.pexels.com/photos/16827632/pexels-photo-16827632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			title: "Fujifilm X-T5",
			oldPrice: 1799,
			price: 1649,
		},
		{
			id: 1,
			img: "https://images.pexels.com/photos/16827633/pexels-photo-16827633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			altImg: "https://images.pexels.com/photos/16827632/pexels-photo-16827632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			title: "Fujifilm X-T5",
			oldPrice: 1799,
			price: 1649,
		},
	];

	return (
		<div className="featured-products">
			<div className="top">
				<h2>Featured Products</h2>
			</div>
			<div className="bottom">
				{data.map((props) => (
					<Product {...props} />
				))}
			</div>
		</div>
	);
};

export default FeaturedProducts;
