import { FC } from 'react';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
import {
	ContactContainer,
	Wrapper,
	Input,
	Button,
	IconsContainer,
} from "./Contact.styles";

const Contact: FC = () => {
	return (
		<ContactContainer>
			<Wrapper>
				<span className="contact-text">GET IN TOUCH WITH US:</span>
				<div className="mail">
					<Input type="text" placeholder="Enter your e-mail..." />
					<Button>JOIN US</Button>
				</div>
				<IconsContainer>
					<FacebookIcon />
					<InstagramIcon />
					<TwitterIcon />
					<GoogleIcon />
					<PinterestIcon />
				</IconsContainer>
			</Wrapper>
		</ContactContainer>
	);
};

export default Contact;
