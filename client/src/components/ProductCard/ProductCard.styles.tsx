import styled from "styled-components";

export const ProductCardContainer = styled.div`
	width: 330px;
	display: flex;
	flex-direction: column;
	gap: 10px;
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
	font-weight: 400;
	margin-bottom: 0;
`;

export const Prices = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 20px;

	h3 {
		font-size: 18px;
		font-weight: 500;

		&:first-child {
			color: gray;
			text-decoration: line-through;
		}
	}
`;
