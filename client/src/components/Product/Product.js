import { Link } from "react-router-dom";

import "./Product.scss";

const Product = ({ id, isNew, img, altImg, title, oldPrice, price }) => {
	return (
		<Link to={`/product/${id}`}>
			<div className="product">
				<div className="image">
					{id.isNew && <span>New Season</span>}
					<img className="primary" src={img} />
					<img className="secondary" src={altImg} />
				</div>
				<h2>{title}</h2>
				<div className="prices">
					<h3>{`$${oldPrice}`}</h3>
					<h3>{`$${price}`}</h3>
				</div>
			</div>
		</Link>
	);
};

export default Product;
