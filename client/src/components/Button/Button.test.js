import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from "./Button";

describe("Button", () => {
	test("renders the button with children", () => {
		const { getByText } = render(<Button>Hello</Button>);
		const buttonElement = getByText("Hello");
		expect(buttonElement).toBeInTheDocument();
	});

	test("disables the button when isLoading is true", () => {
		const { container } = render(<Button isLoading={true}>Loading</Button>);
		const buttonElement = container.firstChild;
		expect(buttonElement).toBeDisabled();
	});

	test("calls the onClick handler when clicked", () => {
		const handleClick = jest.fn();
		const { getByText } = render(
			<Button onClick={handleClick}>Click Me</Button>
		);
		const buttonElement = getByText("Click Me");
		fireEvent.click(buttonElement);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
