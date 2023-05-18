import { Link } from "react-router-dom";
import "./ProductPreview.scss";

const ProductPreview = ({ id, imageUrl, altImg, name, price }) => {
	const oldPrice = Math.round(price * 1.25);

	return (
		<Link to={`/product/${id}`}>
			<div className="product">
				<div className="image">
					<img className="primary" src={imageUrl} />
					<img className="secondary" src={altImg} />
				</div>
				<h2>{name}</h2>
				<div className="prices">
					<h3>{`$${oldPrice}`}</h3>
					<h3>{`$${price}`}</h3>
				</div>
			</div>
		</Link>
	);
};

export default ProductPreview;
