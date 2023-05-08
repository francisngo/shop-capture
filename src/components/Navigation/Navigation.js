import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as CaptureLogo } from "../../assets/capture.svg";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { signOutStart } from "../../store/user/user.action";
import {
	NavigationContainer,
	LogoContainer,
	NavLinks,
	NavLink,
} from "./Navigation.styles";

const Navigation = () => {
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);
	const isCartOpen = useSelector(selectIsCartOpen);

	const signOutUser = () => dispatch(signOutStart());

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
		</>
	);
};

export default Navigation;
