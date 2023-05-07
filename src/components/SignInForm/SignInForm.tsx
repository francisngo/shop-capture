import { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import FormInput from "../FormInput/FormInput";
import Button, { BUTTON_TYPES_CLASSES } from "../Button/Button";
import {
	googleSignInStart,
	emailSignInStart,
} from "../../store/user/user.action";
import { SignInContainer, ButtonsContainer } from "./SignInForm.styles";
import { AuthError, AuthErrorCodes } from "firebase/auth";

const defaultFormFields = {
	email: "",
	password: "",
};

const SignInForm = () => {
	const dispatch = useDispatch();
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const signInWithGoogle = async () => {
		dispatch(googleSignInStart());
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			dispatch(emailSignInStart(email, password));
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
