import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CaptureLogo } from "../../assets/capture.svg";
import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropdown from "../../components/CartDropdown/CartDropdown";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";

import {
	NavigationContainer,
	LogoContainer,
	NavLinks,
	NavLink,
} from "./Navigation.styles";

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);
	return (
		<>
			<NavigationContainer>
				<LogoContainer to="/">
					<CaptureLogo className="logo" />
				</LogoContainer>
				<NavLinks>
					<NavLink to="/shop">SHOP</NavLink>
					{currentUser ? (
						<NavLink as="span" onClick={signOutUser}>
							SIGN OUT
						</NavLink>
					) : (
						<NavLink to="/auth">SIGN IN</NavLink>
					)}
					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</>
	);
};

export default Navigation;
