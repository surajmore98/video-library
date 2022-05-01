import { useData } from "../../contexts/data-context";

export const Category = ({ category }) => {
    const { categoryName, iconImage } = category;
    const { currentCategory, setCurrentCategory } = useData();
    const isActive = categoryName === currentCategory;
    
    const categoryClickHandler= (category) => {
        setCurrentCategory(category);
    };

    return(
        <div className="flex-col flex-center filter-category" onClick={() => categoryClickHandler(categoryName)}>
            <img src={iconImage} className={`image image-round image-round filter-category-image ${isActive ? 'filter-active-image' : ''}`} />
            <div className={`filter-category-text ${isActive ? 'filter-active-text' : ''}`}>{categoryName}</div>
        </div>
    );
}