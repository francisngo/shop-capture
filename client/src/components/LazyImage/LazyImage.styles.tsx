import styled from "styled-components";

interface ImageContainerProps {
	$isLoading: boolean;
	loadingUrl: string;
	imgSrc: string;
  }
  

export const ImageContainer = styled.div<ImageContainerProps>`
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
	background-image: url("${(props) =>
		props.$isLoading ? props.loadingUrl : props.imgSrc}");
	filter: ${(props) => (props.$isLoading ? "blur(5px)" : "")};
	transition: 1s filter linear;

	&:hover {
		transform: scale(1.1);
		transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
	}
`;
