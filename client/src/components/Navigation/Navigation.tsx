import { FC } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { ReactComponent as CaptureLogo } from "../../assets/capture.svg";
import CartIcon from "../CartIcon/CartIcon";
import Cart from "../Cart/Cart";
import SearchIcon from "../SearchIcon/SearchIcon";
import Search from "../Search/Search";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import {
	ROUTE_CAMERAS,
	ROUTE_LENSES,
	ROUTE_BACKPACKS,
	ROUTE_ACCESSORIES,
} from "../../constants/routes";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectIsSearchOpen } from "../../store/categories/categories.selector";
import {
	NavigationContainer,
	LeftSection,
	MiddleSection,
	LogoContainer,
	NavLinksContainer,
	LinksWrapper,
	LinkItem,
	NavigationLink,
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
	const isSearchOpen = useSelector(selectIsSearchOpen);

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
									<NavigationLink to={ROUTE_CAMERAS}>
										CAMERAS
									</NavigationLink>
								</LinkItem>
								<LinkItem>
									<NavigationLink to={ROUTE_LENSES}>
										LENSES
									</NavigationLink>
								</LinkItem>
								<LinkItem>
									<NavigationLink to={ROUTE_BACKPACKS}>
										BACKPACKS
									</NavigationLink>
								</LinkItem>
								<LinkItem>
									<NavigationLink to={ROUTE_ACCESSORIES}>
										ACCESSORIES
									</NavigationLink>
								</LinkItem>
							</LinksWrapper>
						</NavLinksContainer>
					)}
				</MiddleSection>
				<RightSection>
					{!isMobile ? (
						currentUser ? (
							<NavigationLink as="span" onClick={signOutUser}>
								SIGN OUT
							</NavigationLink>
						) : (
							<NavigationLink to="/auth">LOGIN</NavigationLink>
						)
					) : null}
					{!isMobile && <SearchIcon />}
					{!isMobile && <CartIcon />}
					{isMobile && <MobileNavigation />}
				</RightSection>
				{isCartOpen && <Cart />}
				{isSearchOpen && <Search />}
			</NavigationContainer>
		</>
	);
};

export default Navigation;
