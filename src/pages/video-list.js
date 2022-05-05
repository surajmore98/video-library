import { useState } from "react";
import { Navbar } from "../components/nav-bar";
import { SnackBar } from "../components/snack-bar";
import { CategoryList } from "../components/video-list/category-list";
import { SelectPlayList } from "../components/video-list/select-play-list";
import { Video } from "../components/video-list/video";
import { useData } from "../contexts/data-context";

export const VideoList = () => {
    const { videos, currentCategory, error } = useData();
    const [showForm, setShowForm] = useState(false);

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
                            return <Video data={item} formStateSetter={setShowForm} key={item._id} />
                        })
                    }
                </div>
                { showForm && <SelectPlayList formStateSetter={setShowForm}/> }
            </div> 
            { error && <SnackBar/> }
        </div>
    );
}