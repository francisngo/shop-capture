import Slider from "react-slick";
import styled from "styled-components";

const SliderImage = styled.div`
	width: 100%;
	img {
		width: 100%;
		height: 700px;
		object-fit: cover;
	}
`;

const ImageSlider = ({ images }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<Slider {...settings}>
			{images.map((image) => (
				<SliderImage>
					<img src={image.src} alt={image.name} />
				</SliderImage>
			))}
		</Slider>
	);
};

export default ImageSlider;
