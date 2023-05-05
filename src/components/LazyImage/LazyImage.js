import { useState, useEffect } from "react";
import { ImageContainer } from "./LazyImage.styles";

const LazyImage = ({ loadingUrl, imgSrc, ...props }) => {
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
			{...props}
		/>
	);
};

export default LazyImage;
