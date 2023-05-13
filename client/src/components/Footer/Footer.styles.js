import styled from "styled-components";

export const FooterContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	margin-top: auto;
	height: 70px;
	font-size: 15px;

	@media screen and (max-width: 896px) {
		flex-direction: column;
		text-align: center;
	}
`;

export const Copyright = styled.span`
	font-size: 12px;
`;