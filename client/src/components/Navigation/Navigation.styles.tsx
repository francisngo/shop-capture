import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const NavigationContainer = styled.div`
	height: 80px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px 40px;
`;

export const LeftSection = styled.div`
	display: flex;
	align-items: center;
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const MiddleSection = styled.div`
	display: flex;
	flex: 2;
	height: 100%;
	justify-content: center;
`;

export const NavLinksContainer = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
`;

export const LinksWrapper = styled.ul`
	margin: 0;
	padding: 0;
	display: flex;
	height: 100%;
	list-style: none;
`;

export const LinkItem = styled.li`
	height: 100%;
	padding: 0 0.5em;
	font-weight: 500;
	align-items: center;
	justify-content: center;
	display: flex;
`;

export const RightSection = styled.div`
	display: flex;
	align-items: center;
`;

export const NavigationLink = styled(NavLink)`
	padding: 10px 5px;
	cursor: pointer;
	text-decoration: none;
	color: inherit;
	font-size: inherit;
	position: relative;
	margin: 0 15px;

	&::after {
		content: "";
		position: absolute;
		left: 0;
		bottom: -2px;
		width: 100%;
		height: 2px;
		background-color: black;
		transform: scaleX(0);
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
	}

	&:hover {
		&::after {
			transform: scaleX(1);
			transform-origin: bottom left;
		}
	}
`;
