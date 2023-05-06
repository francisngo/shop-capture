import styled from "styled-components";

export const DirectoryContainer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	justify-content: space-between;

	@media screen and (max-width: 1195px) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (max-width: 896px) {
		grid-template-columns: repeat(1, 95%);
		justify-content: center;
	}
`;
