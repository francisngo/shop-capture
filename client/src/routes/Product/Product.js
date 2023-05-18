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
			altImg
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
	const [images, setImages] = useState([]);
	const [selectedImage, setSelectedImage] = useState(0);
	const [product, setProduct] = useState({});
	const { addItemToCart, removeItemFromCart, getProductQuantity } =
		useContext(CartContext);

	useEffect(() => {
		if (data) {
			const { product } = data;
			setProduct(product);
			setImages([product.imageUrl, product.altImg]);
		}
	}, [product, data]);

	const addProductToCart = () => {
		addItemToCart(product);
	};
	const addItemToCartHandler = () => addItemToCart(product);
	const removeItemToCartHandler = () => removeItemFromCart(product);

	const { name, price } = product;

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
				<h1>{name}</h1>
				<span className="price">${price}</span>
				<p>Description</p>
				<div className="quantity">
					<button onClick={removeItemToCartHandler}>-</button>
					{getProductQuantity(product)}
					<button onClick={addItemToCartHandler}>+</button>
				</div>
				<button className="add" onClick={addProductToCart}>
					<AddShoppingCartIcon />
					ADD TO CART
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
