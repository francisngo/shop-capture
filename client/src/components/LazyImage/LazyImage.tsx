import { useState, useEffect, FC } from "react";
import { ImageContainer } from "./LazyImage.styles";

interface LazyImageProps {
	$isLoading: boolean;
	loadingUrl: string;
	imgSrc: string;
	[key: string]: any;
}

const LazyImage: FC<LazyImageProps> = ({ loadingUrl, imgSrc }) => {
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		const img = new Image();
		img.addEventListener("load", () => setLoading(true));
		img.src = imgSrc;
	}, [imgSrc]);

	return (
		<ImageContainer
			$isLoading={!isLoading}
			loadingUrl={loadingUrl}
			imgSrc={imgSrc}
		/>
	);
};

export default LazyImage;
