import styled from "styled-components";
import { Link } from "react-router-dom";

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
	background-color: #fff;
	width: 100%;
	flex-direction: column;
	position: fixed;
	top: 100px;
	left: 0;
	z-index: 99;
`;

export const LinkItem = styled.li`
	width: 100%;
	padding: 0 1.1em;
	color: #222;
	font-weight: 500;
	font-size: 16px;
	display: flex;
	margin-bottom: 10px;
	justify-content: center;
`;

export const NavLink = styled(Link)`
	text-decoration: none;
	color: inherit;
	font-size: inherit;
`;
