import { NoItems } from "../components/no-items";
import { removeFromHistoryVideos } from "../service/history-service";
import { ResponseCode } from "../utility/status-code";
import { Navbar } from "../components/nav-bar";
import { PlaylistItem } from "../components/play-list-item";
import { useAuth } from "../contexts/auth-context";
import { useData } from "../contexts/data-context";

export const History = () => {
    const { history, setHistory } = useData();
    const { auth } = useAuth();
    
    const removeVideo = async (videoId) => {
        const response = await removeFromHistoryVideos(videoId, auth.token);
        if(response.status === ResponseCode.OK) {
            await setHistory(response.data.history);
        }
    }

    return (
        <div>
            <Navbar/>
            <div className="container flex-col">
                <h1 className="primary">History</h1>
                {
                    <div className="bg-charcoal-white p-xl pt-0 vertical-flow-auto">
                    { history && history.length ? 
                        history.map((video) => <PlaylistItem video={video} deleteVideoHandler={removeVideo} />)
                        : <NoItems/>
                    }
                </div>
                }
            </div>
        </div>
    );
}