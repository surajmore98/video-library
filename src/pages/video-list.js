import { Navbar } from "../components/nav-bar";
import { SnackBar } from "../components/snack-bar";
import { CategoryList } from "../components/video-list/category-list";
import { SelectPlayList } from "../components/video-list/select-play-list";
import { Video } from "../components/video-list/video";
import { useData } from "../contexts/data-context";

export const VideoList = () => {
    const { videos, currentCategory, error } = useData();
    const videoList = currentCategory ?
         videos.filter(x => x.category.toLowerCase() === currentCategory.toLowerCase()) : videos;

    return (
        <div>
            <Navbar/>
            <div className="container">
                <CategoryList />
                <div className="video-list mt-xxl">
                    {
                        videoList && videoList.map((item) => {
                            return <Video  data={item} key={item._id}/>
                        })
                    }
                </div>
                <SelectPlayList/>
            </div> 
            { error && <SnackBar/> }
        </div>
    );
}