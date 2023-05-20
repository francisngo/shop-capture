import styled from "styled-components";

export const ConfirmationContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h2 {
		font-size: 36px;
		margin: 0;
	}
`;

export const Input = styled.input`
	padding: 10px;
	border: 1px solid black;
	border-radius: 5px 0 0 5px;
`;

export const Button = styled.button`
	padding: 10px;
	color: white;
	background: black;
	border-radius: 0 5px 5px 0;
	border: 1px solid black;
`;
