import { FC } from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { ConfirmationContainer, Input, Button } from "./Confirmation.styles";

const Confirmation: FC = () => {
	return (
		<ConfirmationContainer>
			<ShoppingBagOutlinedIcon sx={{ fontSize: 40 }} />
			<h2>Thank you!</h2>
			<p>
				A confirmation has been sent to your email. Since you're here
				join our list for discounts.
			</p>
			<div className="mail">
				<Input type="text" placeholder="Enter your e-mail..." />
				<Button>JOIN US</Button>
			</div>
		</ConfirmationContainer>
	);
};

export default Confirmation;
