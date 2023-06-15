import { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import SearchIcon from "@mui/icons-material/Search";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { ReactComponent as CaptureLogo } from "../../assets/capture.svg";
import Cart from "../Cart/Cart";
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
import { selectCartCount } from "../../store/cart/cart.selector";
import useOutsideClick from "../../hooks/useOutsideClick";
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
	SearchIconContainer,
	CartIconContainer,
	ItemCount,
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
	const cartCount = useSelector(selectCartCount);
	const [isSearchOpen, toggleSearchOpen] = useState(false);
	const [isCartOpen, toggleCartOpen] = useState(false);

	const handleSearchToggle = () => toggleSearchOpen(!isSearchOpen);
	const handleCartToggle = () => toggleCartOpen(!isCartOpen);

	const searchRef = useOutsideClick(() => {
		toggleSearchOpen(false);
	});

	const cartRef = useOutsideClick(() => {
		toggleCartOpen(false);
	});

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
					{!isMobile && (
						<SearchIconContainer onClick={handleSearchToggle}>
							<SearchIcon />
						</SearchIconContainer>
					)}
					{!isMobile && (
						<CartIconContainer onClick={handleCartToggle}>
							<ShoppingIcon className="shopping-icon" />
							<ItemCount>{cartCount}</ItemCount>
						</CartIconContainer>
					)}
					{isMobile && <MobileNavigation />}
				</RightSection>
				{isCartOpen && <Cart cartRef={cartRef} />}
				{isSearchOpen && <Search searchRef={searchRef} />}
			</NavigationContainer>
		</>
	);
};

export default Navigation;
