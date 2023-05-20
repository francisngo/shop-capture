import styled from "styled-components";

export const AuthenticationContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, auto);
	margin: 30px auto;
	column-gap: 30px;
	width: 900px;

	@media screen and (max-width: 1195px) {
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 15px;
		grid-row-gap: 25px;
		width: 100%;
	}

	@media screen and (max-width: 896px) {
		grid-template-columns: repeat(1, auto);
		grid-row-gap: 25px;
		justify-content: center;
	}
`;
