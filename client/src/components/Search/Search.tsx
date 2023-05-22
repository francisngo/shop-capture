import { FC, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import algoliasearch, { SearchClient } from "algoliasearch/lite";
import {
	InstantSearch,
	SearchBox,
	Hits,
	useInstantSearch,
} from "react-instantsearch-hooks-web";
import { setIsSearchOpen } from "../../store/categories/categories.action";
import {
	SearchContainer,
	SearchHits,
	HitImage,
	HitDetails,
} from "./Search.styles";

interface EnvVariables {
	REACT_APP_ALGOLIA_APP_ID: string;
	REACT_APP_ALGOLIA_API_KEY: string;
}

declare const process: {
	env: EnvVariables;
};

const searchClient: SearchClient = algoliasearch(
	process.env.REACT_APP_ALGOLIA_APP_ID,
	process.env.REACT_APP_ALGOLIA_API_KEY
);

interface HitProps {
	hit: {
		id: number;
		images: string[];
		name: string;
		categories: string[];
		price: number;
	};
}

interface EmptyQueryBoundaryProps {
	children: ReactNode;
	fallback: any;
}

const EmptyQueryBoundary = ({
	children,
	fallback,
}: EmptyQueryBoundaryProps) => {
	const { indexUiState } = useInstantSearch();
	if (!indexUiState.query) {
		return fallback;
	}
	return children;
};

const Hit = ({ hit }: HitProps) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleClick = () => {
		dispatch(setIsSearchOpen(false));
		navigate(`/product/${hit.id}`);
	};

	return (
		<SearchHits onClick={handleClick}>
			<HitImage src={hit.images[0]} alt={hit.name} />
			<HitDetails>
				<p className="category">{hit.categories[0]}</p>
				<p className="name">{hit.name}</p>
				<p className="price">${hit.price}</p>
			</HitDetails>
		</SearchHits>
	);
};

const Search: FC = () => {
	return (
		<SearchContainer>
			<InstantSearch searchClient={searchClient} indexName="Products">
				<div className="search-box">
					<SearchBox placeholder="Search products..." autoFocus />
				</div>
				<EmptyQueryBoundary fallback={null}>
					<Hits hitComponent={Hit} />
				</EmptyQueryBoundary>
			</InstantSearch>
		</SearchContainer>
	);
};

export default Search;
