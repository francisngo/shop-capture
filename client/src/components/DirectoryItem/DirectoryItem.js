import { useNavigate } from "react-router-dom";
import LazyImage from "../LazyImage/LazyImage";
import { Body, DirectoryItemContainer } from "./DirectoryItem.styles";

const DirectoryItem = ({ category }) => {
	const navigate = useNavigate();
	const { imageUrl, loadingUrl, title, route } = category;

	const handleNavigate = () => navigate(route);

	return (
		<DirectoryItemContainer onClick={handleNavigate}>
			<LazyImage loadingUrl={loadingUrl} imgSrc={imageUrl} />
			<Body>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</Body>
		</DirectoryItemContainer>
	);
};

export default DirectoryItem;
