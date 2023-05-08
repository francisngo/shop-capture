import { useSelector, useDispatch } from "react-redux";
import {
	selectIsCartOpen,
	selectCartCount,
} from "../../store/cart/cart.selector";
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { setIsCartOpen } from "../../store/cart/cart.action";

import {
	CartIconContainer,
	ItemCount,
} from "./CartIcon.styles";

const CartIcon = () => {
	const dispatch = useDispatch();
	const isCartOpen = useSelector(selectIsCartOpen);
	const cartCount = useSelector(selectCartCount);

	const handleToggle = () => dispatch(setIsCartOpen(!isCartOpen));

	return (
		<CartIconContainer onClick={handleToggle}>
			<ShoppingIcon className="shopping-icon" />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
