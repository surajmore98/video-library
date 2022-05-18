import { Banner } from "../components/home/banner";
import { CategoryList } from "../components/home/category-list";
import { Navbar } from "../components/nav-bar";
import { useNavigator } from "../utility/navigate";
import { VIDEOS } from "../utility/route-variables";

export const Home = () => {
    const navigateTo = useNavigator();

    return (
        <div>
            <Navbar/>
            <div className= "container">
                <Banner/>
                <CategoryList/>
                <div className="flex flex-center m-xl main-btn-wrapper">
                    <button
                     className="bg-secondary white btn btn-lg font-bold"
                     onClick={() => navigateTo(VIDEOS)}>View All</button>
                </div>
            </div>    
        </div>    
    );
}