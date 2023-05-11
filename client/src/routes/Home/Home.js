// import Directory from "../../components/Directory/Directory";
import ImageSlider from "../../components/ImageSlider/ImageSlider";

const IMAGE_DATA = [
	{
		id: 0,
		src: "https://ik.imagekit.io/tdabmi2ex/carousel-2.jpeg",
		name: "image-1",
	},
	{
		id: 1,
		src: "https://ik.imagekit.io/tdabmi2ex/carousel-10.jpeg",
		name: "image-2",
	},
	{
		id: 2,
		src: "https://ik.imagekit.io/tdabmi2ex/carousel-6.jpeg",
		name: "image-3",
	},
	{
		id: 3,
		src: "https://ik.imagekit.io/tdabmi2ex/carousel-7.jpeg",
		name: "image-4",
	},
	{
		id: 4,
		src: "https://ik.imagekit.io/tdabmi2ex/carousel-9.jpeg",
		name: "image-5",
	},
];

const Home = () => <ImageSlider images={IMAGE_DATA} />;

export default Home;
