import { Banner } from "../components/home/banner";
import { CategoryList } from "../components/home/category-list";
import { Navbar } from "../components/nav-bar";

export const Home = () => {
    return (
        <div>
            <Navbar/>
            <div className= "container">
                <Banner/>
                <CategoryList/>
            </div>    
        </div>    
    );
}