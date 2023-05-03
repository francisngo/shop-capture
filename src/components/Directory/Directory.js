import DirectoryItem from "../DirectoryItem/DirectoryItem";
import { DirectoryContainer } from "./Directory.styles";

const categories = [
	{
		id: 1,
		title: "Cameras",
		imageUrl: "https://i.ibb.co/kqjRt7P/cameras-3.jpg",
		route: "shop/cameras",
	},
	{
		id: 2,
		title: "Lenses",
		imageUrl: "https://i.ibb.co/nD0SqvF/lenses.jpg",
		route: "shop/lenses",
	},
	{
		id: 3,
		title: "Filters",
		imageUrl: "https://i.ibb.co/pQQ8RQ0/filters.jpg",
		route: "shop/filters",
	},
	{
		id: 4,
		title: "Lighting",
		imageUrl: "https://i.ibb.co/bJ8cGqz/lighting.jpg",
		route: "shop/lighting",
	},
	{
		id: 5,
		title: "Tripods",
		imageUrl: "https://i.ibb.co/mFf6td2/tripods.jpg",
		route: "shop/tripods",
	},
	{
		id: 6,
		title: "Backpacks",
		imageUrl: "https://i.ibb.co/hFD7ztd/backpacks.jpg",
		route: "shop/backpacks",
	},
];

const Directory = () => {
	return (
		<DirectoryContainer>
			{categories.map((category) => (
				<DirectoryItem key={category.id} category={category} />
			))}
		</DirectoryContainer>
	);
};

export default Directory;
