import { useState, useContext } from "react";
import MenuToggle from "../MenuToggle/MenuToggle";
import CartIcon from "../CartIcon/CartIcon";
import { UserContext } from "../../contexts/UserContext";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import {
	NavLinksContainer,
	LinksWrapper,
	LinkItem,
	NavLink,
} from "./MobileNavigation.styles";

const MobileNavigation = () => {
	const [isOpen, setOpen] = useState(false);
	const { currentUser } = useContext(UserContext);

	const toggleMenu = () => setOpen(!isOpen);

	return (
		<NavLinksContainer>
			<MenuToggle isOpen={isOpen} toggle={toggleMenu} />
			{isOpen && (
				<>
					<LinksWrapper>
						<LinkItem>
							<NavLink to="/shop/cameras">CAMERAS</NavLink>
						</LinkItem>
						<LinkItem>
							<NavLink to="/shop/lenses">LENSES</NavLink>
						</LinkItem>
						<LinkItem>
							<NavLink to="/shop/backpacks">BACKPACKS</NavLink>
						</LinkItem>
						<LinkItem>
							<NavLink to="/shop/filters">ACCESSORIES</NavLink>
						</LinkItem>
						<LinkItem>
							{currentUser ? (
								<NavLink as="span" onClick={signOutUser}>
									SIGN OUT
								</NavLink>
							) : (
								<NavLink to="/auth">LOGIN</NavLink>
							)}
						</LinkItem>
						<LinkItem>
							<CartIcon />
						</LinkItem>
					</LinksWrapper>
				</>
			)}
		</NavLinksContainer>
	);
};

export default MobileNavigation;
