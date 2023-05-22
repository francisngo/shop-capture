import { FC, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import algoliasearch from "algoliasearch/lite";
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

const searchClient = algoliasearch(
	"Q6JEDBLP7A",
	"3b642bf1640e07068c06fa801162514e"
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
