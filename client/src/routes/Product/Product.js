import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import "./Product.scss";

const Product = () => {
	const [selectedImage, setSelectedImage] = useState(0);
	const images = [
		"https://images.pexels.com/photos/16827633/pexels-photo-16827633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		"https://images.pexels.com/photos/16827632/pexels-photo-16827632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	];

	return (
		<div className="product-container">
			<div className="left">
				<div className="images">
					<img
						src={images[0]}
						alt=""
						onClick={(e) => setSelectedImage(0)}
					/>
					<img
						src={images[1]}
						alt=""
						onClick={(e) => setSelectedImage(1)}
					/>
				</div>
			</div>
			<div className="main-image">
				<img src={images[selectedImage]} alt="" />
			</div>
			<div className="right">
				<h1>Title</h1>
				<span className="price">Price</span>
				<p>Description</p>
				<div className="quantity">
					<button>-</button>
					Quantity
					<button>+</button>
				</div>
				<button className="add">
					<AddShoppingCartIcon />
					Add To Cart
				</button>
				<div className="links">
					<div className="item">
						<FavoriteBorderIcon /> ADD TO WISH LIST
					</div>
					<div className="item">
						<BalanceIcon /> ADD TO COMPARE
					</div>
				</div>
				<div className="info">
					<span>Vendor</span>
					<span>Product Type</span>
					<span>Tag</span>
				</div>
				<hr />
				<div className="info">
					<span>DESCRIPTION</span>
					<hr />
					<span>ADDITIONAL INFORMATION</span>
					<hr />
					<span>FAQ</span>
				</div>
			</div>
		</div>
	);
};

export default Product;
