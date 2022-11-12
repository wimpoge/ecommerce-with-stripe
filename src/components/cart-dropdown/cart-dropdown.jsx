import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cart';
import Button from '../button/Button';
import CardItem from '../cart-item/cart-item';
import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate()

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => <CardItem key={item.id} cartItem={item} />)}
            </div>

            <Button onClick={goToCheckoutHandler}>Go To Checkout</Button>

        </div>
    );
}

export default CartDropdown;