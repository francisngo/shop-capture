import styled from "styled-components";

export const SliderContainer = styled.div`
	height: calc(100vh - 160px);
	width: 100vw;
	position: relative;
	overflow: hidden;
`;

export const ImageContainer = styled.div`
	width: 500vw;
	height: 100%;
	display: flex;
	transition: all 1s ease;
`;

export const Image = styled.img`
	width: 100vw;
	height: 100%;
	object-fit: cover;
`;

export const IconsContainer = styled.div`
	width: fit-content;
	display: flex;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 25px;
	gap: 10px;
	margin: auto;
`;

export const Icon = styled.div`
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: white;

	&:hover {
		color: lightslategray;
	}
`;
