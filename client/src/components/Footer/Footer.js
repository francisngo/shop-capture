import { FooterContainer, Copyright } from "./Footer.styles";

const Footer = () => {
	return (
		<FooterContainer>
			<span className="logo">
				CAPTURE | A Marketplace for Photographers & Filmmakers{" "}
			</span>
			<Copyright>© Copyright 2023. All Rights Reserved</Copyright>
		</FooterContainer>
	);
};

export default Footer;
