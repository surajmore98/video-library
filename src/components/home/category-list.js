import { useData } from "../../contexts/data-context";
import { Category } from "./category";

export const CategoryList = () => {
    const { categories } = useData();
    return (
        <div className="category-list">
            {
                categories && categories.map((category,index) => {
                    return <Category category={category}  key={index}/>
                })
            }
        </div>
    );
}