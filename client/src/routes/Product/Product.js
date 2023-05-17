import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { CartContext } from "../../contexts/CartContext";
import "./Product.scss";

const PRODUCT = gql`
	query Query($productId: Int!) {
		product(id: $productId) {
			id
			name
			imageUrl
			price
		}
	}
`;

const Product = () => {
	const { id } = useParams();
	const productId = parseInt(id, 10);
	const { loading, error, data } = useQuery(PRODUCT, {
		variables: { productId },
	});
	const [selectedImage, setSelectedImage] = useState(0);
	const [product, setProduct] = useState({});
	const { cartItems, addItemToCart, removeItemFromCart } =
		useContext(CartContext);

	const addItemToCartHandler = () => addItemToCart(cartItems, product);
	const removeItemToCartHandler = () =>
		removeItemFromCart(cartItems, product);

	useEffect(() => {
		console.log("data: ", data);
		console.log("error: ", error);
		if (data) {
			const { product } = data;
			setProduct(product);
		}
	}, [product, data]);

	return (
		<div className="product-container">
			<div className="left">
				<div className="images">
					<img
						src={product?.imageUrl}
						alt=""
						// onClick={(e) => setSelectedImage(0)}
					/>
					{/* <img
						src={images[1]}
						alt=""
						onClick={(e) => setSelectedImage(1)}
					/> */}
				</div>
			</div>
			<div className="main-image">
				<img src={product?.imageUrl} alt="" />
			</div>
			<div className="right">
				<h1>{product?.name}</h1>
				<span className="price">${product?.price}</span>
				<p>Description</p>
				<div className="quantity">
					<button onClick={removeItemToCartHandler}>-</button>
					Quantity
					<button onClick={addItemToCartHandler}>+</button>
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
