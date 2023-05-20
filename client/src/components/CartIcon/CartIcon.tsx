import { useContext, FC } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/CartContext";
import { CartIconContainer, ItemCount } from "./CartIcon.styles";

const CartIcon: FC = () => {
	const { isCartOpen, toggleCart, cartCount } = useContext(CartContext);

	const handleToggle = () => toggleCart(!isCartOpen);

	return (
		<CartIconContainer onClick={handleToggle}>
			<ShoppingIcon className="shopping-icon" />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
