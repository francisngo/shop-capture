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
	border: none;
	border-radius: 5px 0 0 5px;
`;

export const Button = styled.button`
	padding: 10px;
	color: white;
	background: black;
	border-radius: 0 5px 5px 0;
	border: none;
`;

export const IconsContainer = styled.div`
	display: flex;
	gap: 10px;
`;
