
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import Button, {BUTTON_TYPE_CLASSES} from '../button/Button';
import './product-card.styles.scss'

const ProductCard = ({ product }) => {
    const dispatch = useDispatch()
    const { name, price, imageUrl } = product;
    const cartItems = useSelector(selectCartItems)


    const addProductCart = () =>  dispatch(addItemToCart(cartItems, product))

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>

            </div>
            <Button buttonTypes={BUTTON_TYPE_CLASSES.inverted} onClick={addProductCart}>
                Add to card
            </Button>
        </div>
    );
}

export default ProductCard;