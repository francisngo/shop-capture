import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CaptureLogo } from "../../assets/capture.svg";
import { UserContext } from "../../contexts/UserContext";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/CartIcon/CartIcon";
import "./Navigation.scss";

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
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
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
