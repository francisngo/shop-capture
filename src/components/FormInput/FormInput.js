import { FormInputLabel, Input, Group } from "./FormInput.styles";

const FormInput = ({ label, ...props }) => {
	return (
		<Group>
			<Input {...props} />
			{label && (
				<FormInputLabel
					shrink={Boolean(
						props.value &&
							typeof props.value === "string" &&
							props.value.length
					)}
				>
					{label}
				</FormInputLabel>
			)}
		</Group>
	);
};

export default FormInput;
