import { useContext } from 'react';
import CategoryPreview from '../../components/category-preview/category-preview';
import { CategoryContext } from '../../context/categories';

const CategoiesPreview = () => {
    const { categoriesMap } = useContext(CategoryContext)
    return (
        <div>
            {Object.keys(categoriesMap).map(title => {
                const products = categoriesMap[title]
                return <CategoryPreview key={title} title={title} products={products}/>
            }
            )}
        </div>
    )
}

export default CategoiesPreview;