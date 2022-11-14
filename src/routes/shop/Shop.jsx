import { Route, Routes } from 'react-router-dom'
import CategoiesPreview from '../categories-preview/categories-preview';
import Category from '../category/category';
import './shop.styles.scss'

const Shop = () => {
    return (
        <div className='shop-container'>
            <Routes>
                <Route index element={<CategoiesPreview />} />
                <Route path=':category' element={<Category />} />
            </Routes>
        </div>
    )
}

export default Shop;