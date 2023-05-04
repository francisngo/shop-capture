import styled from "styled-components";

import {
	BaseButton,
	GoogleSignInButton,
	InvertedButton,
} from "../Button/Button.styles";

export const CartDropdownContainer = styled.div`
	position: absolute;
	width: 300px;
	height: 450px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 90px;
	right: 40px;
	z-index: 5;

	${BaseButton},
	${GoogleSignInButton},
    ${InvertedButton} {
		font-size: 12px;
		margin-top: auto;
	}
`;

export const EmptyMessage = styled.span`
	font-size: 18px;
	margin: 50px auto;
`;

export const CartItems = styled.span`
	height: 240px;
	display: flex;
	flex-direction: column;
	overflow: scroll;
`;