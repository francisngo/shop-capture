import { useState, FC } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import {
	SliderContainer,
	ImageContainer,
	Image,
	IconsContainer,
	Icon,
} from "./ImageSlider.styles";

interface ImageSliderProps {
	images: { id: number, src: string; name: string }[]
}

const ImageSlider: FC<ImageSliderProps> = ({ images }) => {
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
		<SliderContainer>
			<ImageContainer
				style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
			>
				{images.map((image) => (
					<Image key={image.id} src={image.src} alt={image.name} />
				))}
			</ImageContainer>
			<IconsContainer>
				<Icon onClick={prevSlide}>
					<WestOutlinedIcon />
				</Icon>
				<Icon onClick={nextSlide}>
					<EastOutlinedIcon />
				</Icon>
			</IconsContainer>
		</SliderContainer>
	);
};

export default ImageSlider;
