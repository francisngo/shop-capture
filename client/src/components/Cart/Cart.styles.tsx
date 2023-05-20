import styled from "styled-components";

export const CartContainer = styled.div`
	position: absolute;
	width: 350px;
	top: 90px;
	right: 0;
	z-index: 5;
	background-color: white;
	padding: 20px;
	-webkit-box-shadow: 0px 0px 7px -5px rgba(0, 0, 0, 0.5);
	box-shadow: 0px 0px 7px -5px rgba(0, 0, 0, 0.5);
`;

export const Item = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 10px;
`;

export const Image = styled.img`
	width: 100px;
	height: 100px;
	object-fit: cover;
`;

export const Details = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 10px;
	font-size: 12px;

	p {
		font-weight: 500;
	}

	.price {
		color: #333;
	}
`;

export const Delete = styled.div`
	margin-left: auto;
	color: red;
	font-size: 30px;
	cursor: pointer;
`;

export const Total = styled.div`
	display: flex;
	justify-content: space-between;
	font-weight: 500;
	font-size: 18px;
	margin-bottom: 20px;
`;

export const EmptyMessage = styled.span`
	display: flex;
	justify-content: center;
	margin: 50px auto;
`;

export const ButtonContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;
