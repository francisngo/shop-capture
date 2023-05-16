import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { ReactComponent as CaptureLogo } from "../../assets/capture.svg";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import Cart from "../Cart/Cart";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import {
	NavigationContainer,
	LeftSection,
	MiddleSection,
	LogoContainer,
	NavLinksContainer,
	LinksWrapper,
	LinkItem,
	NavLink,
	RightSection,
} from "./Navigation.styles";

export const DeviceSize = {
	mobile: 768,
	tablet: 992,
	laptop: 1324,
	desktop: 2024,
};

const Navigation = () => {
	const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);

	return (
		<>
			<NavigationContainer>
				<LeftSection>
					<LogoContainer to="/">
						<CaptureLogo className="logo" />
					</LogoContainer>
				</LeftSection>
				<MiddleSection>
					{!isMobile && (
						<NavLinksContainer>
							<LinksWrapper>
								<LinkItem>
									<NavLink to="/shop/cameras">
										CAMERAS
									</NavLink>
								</LinkItem>
								<LinkItem>
									<NavLink to="/shop/lenses">LENSES</NavLink>
								</LinkItem>
								<LinkItem>
									<NavLink to="/shop/backpacks">
										BACKPACKS
									</NavLink>
								</LinkItem>
								<LinkItem>
									<NavLink to="/shop/filters">
										ACCESSORIES
									</NavLink>
								</LinkItem>
							</LinksWrapper>
						</NavLinksContainer>
					)}
				</MiddleSection>
				<RightSection>
					{!isMobile ? (
						currentUser ? (
							<NavLink as="span" onClick={signOutUser}>
								SIGN OUT
							</NavLink>
						) : (
							<NavLink to="/auth">LOGIN</NavLink>
						)
					) : null}
					{!isMobile && <CartIcon />}
					{isMobile && <MobileNavigation />}
				</RightSection>
				{isCartOpen && <Cart />}
			</NavigationContainer>
		</>
	);
};

export default Navigation;
