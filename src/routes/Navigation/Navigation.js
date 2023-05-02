import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CaptureLogo } from "../../assets/capture.svg";
import CartIcon from "../../components/CartIcon/CartIcon";
import "./Navigation.scss";

const Navigation = () => {
	return (
		<>
			<div className="navigation">
				<Link className="logo-container" to="/">
					<CaptureLogo className="logo" />
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">
						SHOP
					</Link>
					<Link className="nav-link" to="/auth">
						SIGN IN
					</Link>
					<CartIcon />
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
