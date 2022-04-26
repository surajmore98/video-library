export const Category = ({ category }) => {
    const { image, categoryName } = category;
    return(
        <div className="category bg-charcoal-black-light">
            <img src={image} className="image image-border-rounded" />
            <div className="category-content label-center">
                <h2>{categoryName}</h2>
            </div>
        </div>
    );
}