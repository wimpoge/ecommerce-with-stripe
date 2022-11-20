import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/category-preview';
import Spinner from '../../components/spinner/spinner';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/category.selector';

const CategoiesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading)

    return (
        <div>
            {isLoading ? (
                <Spinner />
            ) : Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title]
                return <CategoryPreview key={title} title={title} products={products} />
            })
            }
        </div>
    )
}

export default CategoiesPreview;