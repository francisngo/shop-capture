import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import Search from "@mui/icons-material/Search";
import { SearchIconContainer } from "./SearchIcon.styles";
import { selectIsSearchOpen } from "../../store/categories/categories.selector";
import { setIsSearchOpen } from "../../store/categories/categories.action";

const SearchIcon: FC = () => {
	const dispatch = useDispatch();
	const isSearchOpen = useSelector(selectIsSearchOpen);

	const handleToggle = () => dispatch(setIsSearchOpen(!isSearchOpen));

	return (
		<SearchIconContainer onClick={handleToggle}>
			<Search />
		</SearchIconContainer>
	);
};

export default SearchIcon;
