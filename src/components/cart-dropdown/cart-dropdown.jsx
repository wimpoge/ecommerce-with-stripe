import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cart';
import Button from '../button/Button';
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles.jsx';
import CartItem from '../cart-item/cart-item'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate()

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length
                    ? (cartItems.map(item => <CartItem key={item.id} cartItem={item} />))
                    : (<EmptyMessage>Cart is empty</EmptyMessage>)}
            </CartItems>

            <Button onClick={goToCheckoutHandler}>Go To Checkout</Button>

        </CartDropdownContainer>
    );
}

export default CartDropdown;