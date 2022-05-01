import { useData } from "../../contexts/data-context";
import { useNavigate } from "react-router-dom";

export const Category = ({ category }) => {
    const { setCurrentCategory } = useData();
    const { image, categoryName } = category;
    const navigate = useNavigate();

    const categoryClickHandler= (category) => {
        setCurrentCategory(category);
        navigate("/videos");
    };

    return(
        <div className="category bg-charcoal-black-light" onClick={() => categoryClickHandler(categoryName)}>
            <img src={image} className="image image-border-rounded" />
            <div className="category-content label-center">
                <h2>{categoryName}</h2>
            </div>
        </div>
    );
}