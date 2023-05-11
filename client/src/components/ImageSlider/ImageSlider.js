import { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./ImageSlider.scss";

const ImageSlider = ({ images }) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const prevSlide = () => {
		setCurrentSlide(
			currentSlide === 0 ? images.length - 1 : (prev) => prev - 1
		);
	};
	const nextSlide = () => {
		setCurrentSlide(
			currentSlide === images.length - 1 ? 0 : (prev) => prev + 1
		);
	};

	return (
		<div className="slider">
			<div
				className="container"
				style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
			>
				{images.map((image) => (
					<img key={image.id} src={image.src} alt={image.name} />
				))}
			</div>
			<div className="icons">
				<div className="icon" onClick={prevSlide}>
					<WestOutlinedIcon />
				</div>
				<div className="icon" onClick={nextSlide}>
					<EastOutlinedIcon />
				</div>
			</div>
		</div>
	);
};

export default ImageSlider;
