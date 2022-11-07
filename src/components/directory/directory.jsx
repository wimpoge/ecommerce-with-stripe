import CategoryItem from "../category-item/item";
import './item.styles.scss'

const Directory = ({ categories }) => {
    return (
        <div className="directory-container">
            {categories.map((category) => (
                <CategoryItem key={category.id} title={category.title} imageUrl={category.imageUrl} />
            ))}
        </div>
    );
}

export default Directory;