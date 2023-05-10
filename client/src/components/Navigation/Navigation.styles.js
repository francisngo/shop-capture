import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 25px;
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

export const NavLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
	text-decoration: none;
	color: inherit;
	font-size: inherit;
`;
