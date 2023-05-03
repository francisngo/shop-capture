import { useNavigate } from "react-router-dom";
import {
	BackgroundImage,
	Body,
	DirectoryItemContainer,
} from "./DirectoryItem.styles";

const DirectoryItem = ({ category }) => {
	const navigate = useNavigate();
	const { imageUrl, title, route } = category;

	const handleNavigate = () => navigate(route);

	return (
		<DirectoryItemContainer onClick={handleNavigate}>
			<BackgroundImage imageUrl={imageUrl} />
			<Body>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</Body>
		</DirectoryItemContainer>
	);
};

export default DirectoryItem;
