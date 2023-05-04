import { useSelector, useDispatch } from "react-redux";
import {
	selectIsCartOpen,
	selectCartCount,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

import {
	CartIconContainer,
	ItemCount,
	ShoppingIcon,
} from "./CartIcon.styles.js";

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
