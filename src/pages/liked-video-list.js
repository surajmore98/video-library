import { Navbar } from "../components/nav-bar";
import { NoItems } from "../components/no-items";
import { PlaylistItem } from "../components/play-list-item";
import { useAuth } from "../contexts/auth-context";
import { useData } from "../contexts/data-context";
import { removeFromLikedVideos } from "../service/like-video-service";
import { ResponseCode } from "../utility/status-code";

export const LikedVideoList = () => {
    const { likedVideoList, setLikedVideos } = useData();
    const { auth } = useAuth();
    
    const removeVideo = async (videoId) => {
        const response = await removeFromLikedVideos(videoId, auth.token);
        if(response.status === ResponseCode.OK) {
            await setLikedVideos(response.data.likes);
        }
    }

    return (
        <div>
            <Navbar/>
            <div className="container flex-col">
                <h1 className="primary">Liked Videos</h1>
                {
                    <div className="bg-charcoal-white p-xl pt-0 vertical-flow-auto">
                    {
                        likedVideoList && likedVideoList.length ?
                         likedVideoList.map((video) => 
                         <PlaylistItem video={video} deleteVideoHandler={removeVideo} />)
                         : <NoItems/>
                    }
                </div>
                }
            </div>
        </div>
    );
}

