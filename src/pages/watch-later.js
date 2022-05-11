import { Navbar } from "../components/nav-bar";
import { PlaylistItem } from "../components/play-list-item";
import { useAuth } from "../contexts/auth-context";
import { useData } from "../contexts/data-context";
import { removeFromWatchLaterVideos } from "../service/watch-later-service";
import { ResponseCode } from "../utility/status-code";
import { NoItems } from "../components/no-items";

export const WatchLater = () => {
    const { watchLaterList, setWatchLater } = useData();
    const { auth } = useAuth();
    
    const removeVideo = async (videoId) => {
        try {
            const response = await removeFromWatchLaterVideos(videoId, auth.token);
            if(response.status === ResponseCode.OK) {
                await setWatchLater(response.data.watchlater);
            }
        } catch(e) {
            console.error(e);
        }
    }

    return (
        <div>
            <Navbar/>
            <div className="container flex-col full-width">
                <h1 className="primary">WatchLater</h1>
                {
                    <div className="bg-charcoal-white p-xl pt-0 vertical-flow-auto">
                    {
                        watchLaterList && watchLaterList.length ?
                         watchLaterList.map((video) =>
                          <PlaylistItem video={video} deleteVideoHandler={removeVideo} />)
                          : <NoItems/>

                    }
                </div>
                }
            </div>         
        </div>
    );
};