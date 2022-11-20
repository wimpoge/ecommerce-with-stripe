import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom'
import { fetchCategoriesAsync, setCategories } from '../../store/categories/category.action';
import { getCategoriesAndDocuments } from '../../utils/firebase';
import CategoiesPreview from '../categories-preview/categories-preview';
import Category from '../category/category';
import './shop.styles.scss'

const Shop = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategoriesAsync())
    }, [])

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