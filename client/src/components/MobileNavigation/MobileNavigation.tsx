import { useState, FC } from "react";
import { useSelector } from "react-redux";
import MenuToggle from "../MenuToggle/MenuToggle";
import {
	ROUTE_CAMERAS,
	ROUTE_LENSES,
	ROUTE_BACKPACKS,
	ROUTE_ACCESSORIES,
} from "../../constants/routes";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { selectCurrentUser } from "../../store/user/user.selector";
import {
	NavLinksContainer,
	LinksWrapper,
	LinkItem,
	NavLink,
} from "./MobileNavigation.styles";

const MobileNavigation: FC = () => {
	const [isOpen, setOpen] = useState(false);
	const currentUser = useSelector(selectCurrentUser);

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
							<NavLink onClick={toggleMenu} to={ROUTE_CAMERAS}>
								CAMERAS
							</NavLink>
						</LinkItem>
						<LinkItem>
							<NavLink onClick={toggleMenu} to={ROUTE_LENSES}>
								LENSES
							</NavLink>
						</LinkItem>
						<LinkItem>
							<NavLink onClick={toggleMenu} to={ROUTE_BACKPACKS}>
								BACKPACKS
							</NavLink>
						</LinkItem>
						<LinkItem>
							<NavLink
								onClick={toggleMenu}
								to={ROUTE_ACCESSORIES}
							>
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
					</LinksWrapper>
				</>
			)}
		</NavLinksContainer>
	);
};

export default MobileNavigation;
