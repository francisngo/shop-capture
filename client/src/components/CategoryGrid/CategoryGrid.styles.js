import styled from "styled-components";

export const CategoryGridContainer = styled.div`
	display: flex;
	height: 80vh;
	gap: 10px;
	margin: 10px 10px 100px 10px;
`;

export const Column = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const ColumnLarge = styled.div`
	flex: 2;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const Row = styled.div`
	flex: 1;
	display: flex;
	gap: 10px;
	position: relative;
	overflow: hidden;
`;

export const Button = styled.div`
	position: absolute;
	min-width: 100px;
	width: fit-content;
	height: 50px;
	padding: 10px;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	cursor: pointer;
	border: none;
	background-color: white;
	text-transform: uppercase;
	font-weight: 500;
	opacity: 1;

	&:hover {
		opacity: 0.8;
	}
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;

	&:hover {
		transform: scale(1.1);
		transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
	}
`;
