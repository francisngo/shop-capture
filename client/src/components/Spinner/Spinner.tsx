import { FC } from 'react';
import { SpinnerContainer, SpinnerOverlay } from "./Spinner.styles";

const Spinner: FC = () => (
	<SpinnerOverlay>
		<SpinnerContainer />
	</SpinnerOverlay>
);

export default Spinner;
