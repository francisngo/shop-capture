import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import {
	selectIsCartOpen,
	selectCartCount,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { CartIconContainer, ItemCount } from "./CartIcon.styles";

const CartIcon: FC = () => {
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
