import styled from "styled-components";

export const ContactContainer = styled.div`
	background-color: #333;
	color: white;
	padding: 15px;
	display: flex;
	justify-content: center;
	margin-top: auto;
`;

export const Wrapper = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media screen and (max-width: 1195px) {
		width: 75%;
		text-align: center;
	}

	@media screen and (max-width: 896px) {
		width: 100%;

		.contact-text {
			display: none;
		}
	}
`;

export const Input = styled.input`
	padding: 10px;
	border: 2px solid black;
`;

export const Button = styled.button`
	padding: 10px;
	color: white;
	background: black;
	border: 2px solid black;
	cursor: pointer;

	&:hover {
		background-color: white;
		color: black;
	}
`;

export const IconsContainer = styled.div`
	display: flex;
	gap: 10px;
`;
