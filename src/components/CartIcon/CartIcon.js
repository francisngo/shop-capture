import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import {
	CartIconContainer,
	ItemCount,
	ShoppingIcon,
} from "./CartIcon.styles.js";

const CartIcon = () => {
	const { isCartOpen, cartCount, toggleCart } = useContext(CartContext);
	const handleToggle = () => toggleCart(!isCartOpen);
	return (
		<CartIconContainer onClick={handleToggle}>
			<ShoppingIcon className="shopping-icon" />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
