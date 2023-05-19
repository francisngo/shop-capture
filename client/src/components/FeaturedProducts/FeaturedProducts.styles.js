import styled from "styled-components";

export const FeaturedProductsContainer = styled.div`
	margin: 100px 160px;

	@media screen and (max-width: 896px) {
		margin: 50px;
	}
`;

export const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 25px;
	justify-content: center;

	h2 {
		flex: 2;
		text-transform: capitalize;
	}
`;

export const SpinnerContainer = styled.div`
	display: flex;
	justify-content: center;
	text-align: center;
`;

export const Bottom = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 50px;
	justify-content: center;

	@media screen and (max-width: 1195px) {
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 15px;
		grid-row-gap: 25px;
	}

	@media screen and (max-width: 896px) {
		grid-template-columns: repeat(1, 350px);
		grid-row-gap: 25px;
		justify-content: center;
	}
`;
