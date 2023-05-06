import { useState } from "react";
import { useDispatch } from "react-redux";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import { signUpStart } from "../../store/user/user.action";
import { SignInContainer } from "../SignInForm/SignInForm.styles";

const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUpForm = () => {
	const dispatch = useDispatch();
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert("Password entered do not match.");
			return;
		}

		try {
			dispatch(signUpStart(email, password, displayName));
			resetFormFields();
		} catch (error) {
			if (error.code === "auth/email-already-in-use") {
				alert("Cannot create user, email already exist");
			} else {
				console.error("Error signing up user", error);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<SignInContainer>
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Full Name"
					type="text"
					required
					onChange={handleChange}
					name="displayName"
					value={displayName}
				/>
				<FormInput
					label="Email"
					type="email"
					required
					onChange={handleChange}
					name="email"
					value={email}
				/>
				<FormInput
					label="Password"
					type="password"
					required
					onChange={handleChange}
					name="password"
					value={password}
				/>
				<FormInput
					label="Confirm Password"
					type="password"
					required
					onChange={handleChange}
					name="confirmPassword"
					value={confirmPassword}
				/>
				<Button type="submit">Sign Up</Button>
			</form>
		</SignInContainer>
	);
};

export default SignUpForm;
