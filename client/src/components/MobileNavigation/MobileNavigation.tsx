import { useState, useContext, FC } from "react";
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

const MobileNavigation: FC = () => {
	const [isOpen, setOpen] = useState(false);
	const { currentUser } = useContext(UserContext);

	const toggleMenu = () => setOpen(!isOpen);
	const handleSignOut = () => {
		setOpen(!isOpen);
		signOutUser();
	};

	return (
		<NavLinksContainer>
			<MenuToggle isOpen={isOpen} toggle={toggleMenu} />
			{isOpen && (
				<>
					<LinksWrapper>
						<LinkItem>
							<NavLink onClick={toggleMenu} to="/shop/cameras">
								CAMERAS
							</NavLink>
						</LinkItem>
						<LinkItem>
							<NavLink onClick={toggleMenu} to="/shop/lenses">
								LENSES
							</NavLink>
						</LinkItem>
						<LinkItem>
							<NavLink onClick={toggleMenu} to="/shop/backpacks">
								BACKPACKS
							</NavLink>
						</LinkItem>
						<LinkItem>
							<NavLink onClick={toggleMenu} to="/shop/filters">
								ACCESSORIES
							</NavLink>
						</LinkItem>
						<LinkItem>
							{currentUser ? (
								<NavLink as="span" onClick={handleSignOut}>
									SIGN OUT
								</NavLink>
							) : (
								<NavLink onClick={toggleMenu} to="/auth">
									LOGIN
								</NavLink>
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
