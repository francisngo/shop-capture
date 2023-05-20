import { FC } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { ReactComponent as CaptureLogo } from "../../assets/capture.svg";
import CartIcon from "../CartIcon/CartIcon";
import Cart from "../Cart/Cart";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
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

const Navigation: FC = () => {
	const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
	const currentUser = useSelector(selectCurrentUser);
	const isCartOpen = useSelector(selectIsCartOpen);

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
									<NavLink to="/products/cameras">
										CAMERAS
									</NavLink>
								</LinkItem>
								<LinkItem>
									<NavLink to="/products/lenses">
										LENSES
									</NavLink>
								</LinkItem>
								<LinkItem>
									<NavLink to="/products/backpacks">
										BACKPACKS
									</NavLink>
								</LinkItem>
								<LinkItem>
									<NavLink to="/products/filters">
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
