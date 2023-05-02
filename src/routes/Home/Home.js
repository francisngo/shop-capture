import { Outlet } from "react-router-dom";
import Directory from "../../components/Directory/Directory";

const Home = () => {
	const categories = [
		{
			id: 1,
			title: "Cameras",
			imageUrl: "https://i.ibb.co/kqjRt7P/cameras-3.jpg",
		},
		{
			id: 2,
			title: "Lenses",
			imageUrl: "https://i.ibb.co/nD0SqvF/lenses.jpg",
		},
		{
			id: 3,
			title: "Filters",
			imageUrl: "https://i.ibb.co/pQQ8RQ0/filters.jpg",
		},
		{
			id: 4,
			title: "Lighting",
			imageUrl: "https://i.ibb.co/bJ8cGqz/lighting.jpg",
		},
		{
			id: 5,
			title: "Tripods",
			imageUrl: "https://i.ibb.co/mFf6td2/tripods.jpg",
		},
		{
			id: 6,
			title: "Backpacks",
			imageUrl: "https://i.ibb.co/hFD7ztd/backpacks.jpg",
		},
	];
	return (
		<>
			<Directory categories={categories} />
			<Outlet />
		</>
	);
};

export default Home;
