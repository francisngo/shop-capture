import styled from "styled-components";

export const SearchContainer = styled.div`
	position: absolute;
	width: 100%;
	top: 90px;
	right: 0;
	z-index: 4;
	background-color: white;
	padding: 20px;
	-webkit-box-shadow: 0px 0px 7px -5px rgba(0, 0, 0, 0.5);
	box-shadow: 0px 0px 7px -5px rgba(0, 0, 0, 0.5);
`;

export const SearchHits = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	cursor: pointer;
`;

export const HitImage = styled.img`
	width: 125px;
	height: 125px;
	object-fit: cover;
`;

export const HitDetails = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 10px;

	.category {
		text-transform: uppercase;
	}

	.name {
		font-size: 16px;
	}

	.price {
		font-weight: bold;
	}
`;
