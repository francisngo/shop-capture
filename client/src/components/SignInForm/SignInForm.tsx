import { useState, FormEvent, ChangeEvent } from "react";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import FormInput from "../FormInput/FormInput";
import Button, { BUTTON_TYPES_CLASSES } from "../Button/Button";
import {
	signInAuthUserWithEmailAndPassword,
	signInWithGooglePopup,
  } from '../../utils/firebase/firebase.utils';
import { SignInContainer, ButtonsContainer } from "./SignInForm.styles";


const defaultFormFields = {
	email: "",
	password: "",
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const signInWithGoogle = async () => {
		await signInWithGooglePopup();
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			await signInAuthUserWithEmailAndPassword(email, password);
			resetFormFields();
		} catch (error) {
			switch ((error as AuthError).code) {
				case AuthErrorCodes.INVALID_PASSWORD:
					alert("The password you entered was incorrect.");
					break;
				case AuthErrorCodes.USER_DELETED:
					alert("The user is not associated with this email.");
					break;
				default:
					console.error("Error signing in user", error);
			}
		}
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<SignInContainer>
			<h2>Already have an account?</h2>
			<span></span>
			<form onSubmit={handleSubmit}>
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
				<ButtonsContainer>
					<Button>Sign In</Button>
					<Button
						type="button"
						buttonType={BUTTON_TYPES_CLASSES.google}
						onClick={signInWithGoogle}
					>
						Google Sign In
					</Button>
				</ButtonsContainer>
			</form>
		</SignInContainer>
	);
};

export default SignInForm;
