export const Category = ({ category, isActive }) => {
    const { categoryName, iconImage } = category;
    console
    return(
        <div className="flex-col flex-center filter-category">
            <img src={iconImage} className={`image image-round image-round filter-category-image ${isActive ? 'filter-active-image' : ''}`} />
            <div className={`filter-category-text ${isActive ? 'filter-active-text' : ''}`}>{categoryName}</div>
        </div>
    );
}