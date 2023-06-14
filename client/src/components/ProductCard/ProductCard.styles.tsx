import styled from "styled-components";

export const ProductCardContainer = styled.div`
	width: 330px;
	display: flex;
	flex-direction: column;
	border: 2px solid black;
	-webkit-box-shadow: 0px 0px 7px -5px rgba(0, 0, 0, 0.5);
	box-shadow: 0px 0px 7px -5px rgba(0, 0, 0, 0.5);
`;

export const ImageContainer = styled.div`
	width: 100%;
	height: 330px;
	overflow: hidden;
	position: relative;
	margin: 0;

	&:hover {
		.secondary {
			z-index: 2;
		}
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		position: absolute;
	}

	.primary {
		z-index: 1;
	}
`;

export const Name = styled.h2`
	font-size: 16px;
	font-weight: 500;
	margin-bottom: 0;
	text-align: center;
`;

export const Prices = styled.div`
	text-align: center;
	gap: 20px;

	p {
		font-size: 18px;
		font-weight: 700;
	}
`;
