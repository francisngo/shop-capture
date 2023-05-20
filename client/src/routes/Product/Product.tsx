import { useState, useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import Button from "../../components/Button/Button";
import Spinner from "../../components/Spinner/Spinner";
import {
	addItemToCart,
	removeItemFromCart,
	getProductQuantity,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
	ProductContainer,
	SpinnerContainer,
	LeftContainer,
	ImagesContainer,
	MainImage,
	RightContainer,
	Price,
	Quantity,
	ButtonsContainer,
	LinksContainer,
	Item,
	Info,
} from "./Product.styles";

interface ProductData {
	id: number;
	name: string;
	imageUrl: string;
	altImg: string;
	price: number;
	priceId: string;
}

const PRODUCT = gql`
	query Query($productId: Int!) {
		product(id: $productId) {
			id
			name
			imageUrl
			altImg
			price
			priceId
		}
	}
`;

const Product: FC = () => {
	const dispatch = useDispatch();
	const { id = "" } = useParams<{ id?: string }>();
	const productId = parseInt(id, 10);
	const { loading, data } = useQuery(PRODUCT, {
		variables: { productId },
	});
	const [images, setImages] = useState<string[]>([]);
	const [selectedImage, setSelectedImage] = useState(0);
	const [product, setProduct] = useState<ProductData>({
		id: 0,
		name: "",
		imageUrl: "",
		altImg: "",
		price: 0,
		priceId: "",
	});
	const cartItems = useSelector(selectCartItems);

	useEffect(() => {
		if (data) {
			const { product: productData } = data;
			setProduct(productData);
			setImages([productData.imageUrl, productData.altImg]);
		}
	}, [product, data]);

	const addProductToCart = () => {
		dispatch(addItemToCart(cartItems, product));
	};

	const addItemToCartHandler = () => {
		dispatch(addItemToCart(cartItems, product));
	};
	const removeItemToCartHandler = () =>
		dispatch(removeItemFromCart(cartItems, product));

	const { name, price } = product;

	return (
		<ProductContainer>
			{loading ? (
				<SpinnerContainer>
					<Spinner />
				</SpinnerContainer>
			) : (
				<>
					<LeftContainer>
						<ImagesContainer>
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
						</ImagesContainer>
					</LeftContainer>
					<MainImage>
						<img src={images[selectedImage]} alt="" />
					</MainImage>
					<RightContainer>
						<h1>{name}</h1>
						<Price>${price}</Price>
						<p>Description</p>
						<Quantity>
							<button onClick={removeItemToCartHandler}>-</button>
							{getProductQuantity(cartItems, product)}
							<button onClick={addItemToCartHandler}>+</button>
						</Quantity>
						<ButtonsContainer>
							<Button onClick={addProductToCart}>
								<AddShoppingCartIcon />
								ADD TO CART
							</Button>
						</ButtonsContainer>
						<LinksContainer>
							<Item>
								<FavoriteBorderIcon /> ADD TO WISH LIST
							</Item>
							<Item>
								<BalanceIcon /> ADD TO COMPARE
							</Item>
						</LinksContainer>
						<Info>
							<span>Vendor</span>
							<span>Product Type</span>
							<span>Tag</span>
						</Info>
						<hr />
						<Info>
							<span>DESCRIPTION</span>
							<hr />
							<span>ADDITIONAL INFORMATION</span>
							<hr />
							<span>FAQ</span>
						</Info>
					</RightContainer>
				</>
			)}
		</ProductContainer>
	);
};

export default Product;
