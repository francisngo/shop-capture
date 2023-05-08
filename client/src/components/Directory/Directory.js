import DirectoryItem from "../DirectoryItem/DirectoryItem";
import { DirectoryContainer } from "./Directory.styles";

const categories = [
	{
		id: 1,
		title: "Cameras",
		imageUrl: "https://ik.imagekit.io/tdabmi2ex/cameras-3.jpg",
		loadingUrl: "https://ik.imagekit.io/tdabmi2ex/cameras-3-small.jpg",
		route: "shop/cameras",
	},
	{
		id: 2,
		title: "Lenses",
		imageUrl: "https://ik.imagekit.io/tdabmi2ex/lenses.jpg",
		loadingUrl: "https://ik.imagekit.io/tdabmi2ex/lenses-small.jpg",
		route: "shop/lenses",
	},
	{
		id: 3,
		title: "Filters",
		imageUrl: "https://ik.imagekit.io/tdabmi2ex/filters.jpg",
		loadingUrl: "https://ik.imagekit.io/tdabmi2ex/filters-small.jpg",
		route: "shop/filters",
	},
	{
		id: 4,
		title: "Lighting",
		imageUrl: "https://ik.imagekit.io/tdabmi2ex/lighting.jpg",
		loadingUrl: "https://ik.imagekit.io/tdabmi2ex/lighting-small.jpg",
		route: "shop/lighting",
	},
	{
		id: 5,
		title: "Tripods",
		imageUrl: "https://ik.imagekit.io/tdabmi2ex/tripods.jpg",
		loadingUrl: "https://ik.imagekit.io/tdabmi2ex/tripods-small.jpg",
		route: "shop/tripods",
	},
	{
		id: 6,
		title: "Backpacks",
		imageUrl: "https://ik.imagekit.io/tdabmi2ex/backpacks.jpg",
		loadingUrl: "https://ik.imagekit.io/tdabmi2ex/backpacks-small.jpg",
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
