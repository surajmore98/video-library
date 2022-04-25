import { Navbar } from "../components/nav-bar";
import { CategoryList } from "../components/video-list/category-list";
import { Video } from "../components/video-list/video";
import { useData } from "../contexts/data-context";

export const VideoList = () => {
    const { videos } = useData();
    return (
        <div>
            <Navbar/>
            <div className="container">
                <CategoryList/>
                <div className="video-list mt-xxl">
                    {
                        videos && videos.map((item) => {
                            return <Video  data={item} key={item._id}/>
                        })
                    }
                </div>
            </div>    
        </div>
    );
}