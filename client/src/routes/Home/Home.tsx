import { FC, lazy, Suspense } from "react";
import Spinner from "../../components/Spinner/Spinner";

const ImageSlider = lazy(
	() => import("../../components/ImageSlider/ImageSlider")
);
const FeaturedProducts = lazy(
	() => import("../../components/FeaturedProducts/FeaturedProducts")
);
const CategoryGrid = lazy(
	() => import("../../components/CategoryGrid/CategoryGrid")
);

interface ImageData {
	id: number;
	src: string;
	name: string;
}

const IMAGE_DATA: ImageData[] = [
	{
		id: 0,
		src: "https://images.pexels.com/photos/16768785/pexels-photo-16768785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		name: "image-1",
	},
	{
		id: 1,
		src: "https://images.pexels.com/photos/16768815/pexels-photo-16768815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		name: "image-2",
	},
	{
		id: 2,
		src: "https://images.pexels.com/photos/16768783/pexels-photo-16768783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		name: "image-3",
	},
	{
		id: 3,
		src: "https://images.pexels.com/photos/16768782/pexels-photo-16768782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		name: "image-4",
	},
	{
		id: 4,
		src: "https://images.pexels.com/photos/16768781/pexels-photo-16768781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		name: "image-5",
	},
];

const Home: FC = () => {
	return (
		<div className="home-container">
			<Suspense fallback={<Spinner />}>
				<ImageSlider images={IMAGE_DATA} />
				<FeaturedProducts />
				<CategoryGrid />
			</Suspense>
		</div>
	);
};

export default Home;
