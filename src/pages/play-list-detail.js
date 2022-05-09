import { useParams } from "react-router-dom";
import { Navbar } from "../components/nav-bar";
import { NoItems } from "../components/no-items";
import { PlaylistItem } from "../components/play-list-item";
import { useAuth } from "../contexts/auth-context";
import { useData } from "../contexts/data-context";
import { removeVideoFromPlaylist } from "../service/play-list-service";
import { ResponseCode } from "../utility/status-code";

export const PlayListDetails = () => {
    const { playList, setPlayListData  } = useData();
    const { auth } = useAuth();
    const { id } = useParams();
    const currentPlayList = playList.find(x => x._id === id);

    const removeVideo = async (videoId) => {
        const response = await removeVideoFromPlaylist(id, videoId, auth.token);
        if(response.status === ResponseCode.OK) {
            await setPlayListData(auth.token);
        }
    }

    return (
        <div>
            <Navbar/>
            <div className="detail-container">
                <div className="bg-charcoal-white pt-lg">
                    <div className="field-group m-md">
                        <div className="flex">
                            <h3>{ currentPlayList.title }</h3>
                        </div>
                    </div>
                    <div className="field-group m-md">
                        <p className="font-lg font-semi-bold">{ currentPlayList.description }</p>
                    </div>
                    <div className="m-md font-lg charcoal-gray align-self-start">
                        <span>{ currentPlayList.videos.length } videos, Updated { currentPlayList.updateDate }</span>
                    </div>
                </div>
                <div className="bg-charcoal-white p-xl pt-0 vertical-flow-auto">
                {
                    (currentPlayList && currentPlayList.length) ?
                        currentPlayList.videos.map((video, index) => <PlaylistItem video={video} deleteVideoHandler={removeVideo} key={index} />)
                        : <NoItems/>
                }
                </div>
            </div>         
        </div>
    );
};