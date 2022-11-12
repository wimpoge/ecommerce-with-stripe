import { useContext } from 'react';
import { CartContext } from '../../context/cart';
import Button from '../button/Button';
import './product-card.styles.scss'

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext)

    const addProductCart = () => addItemToCart(product)

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>

            </div>
            <Button buttonTypes='inverted' onClick={addProductCart}>
                Add to card
            </Button>
        </div>
    );
}

export default ProductCard;