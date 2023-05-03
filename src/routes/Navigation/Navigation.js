import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CaptureLogo } from "../../assets/capture.svg";
import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropdown from "../../components/CartDropdown/CartDropdown";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";

import "./Navigation.scss";

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);
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
					{currentUser ? (
						<span className="nav-link" onClick={signOutUser}>
							SIGN OUT
						</span>
					) : (
						<Link className="nav-link" to="/auth">
							SIGN IN
						</Link>
					)}
					<CartIcon />
				</div>
				{isCartOpen && <CartDropdown />}
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
