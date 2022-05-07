import { useParams } from "react-router-dom";
import { Navbar } from "../components/nav-bar";
import { PlaylistItem } from "../components/play-list-item";
import { useAuth } from "../contexts/auth-context";
import { useData } from "../contexts/data-context";
import { removeVideoFromPlaylist } from "../service/play-list-service";

export const PlayListDetails = () => {
    const { playList, setPlayListData  } = useData();
    const { user, auth } = useAuth();
    const { id } = useParams();
    const currentUser = `${user.firstName} ${user.lastName}`; 
    const currentPlayList = playList.find(x => x._id === id);

    const removeVideo = async (videoId) => {
        const response = await removeVideoFromPlaylist(id, videoId, auth.token);
        if(response.status === 200) {
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
                    <div className="flex flex-start m-md mt-xl pt-xl border-top-black">
                        <div className="avatar avatar-letter avatar-md bg-charcoal-gray">{currentUser.charAt(0)}</div>
                        <div className="font-bold font-lg">{currentUser}</div>
                    </div>
                </div>
                <div className="bg-charcoal-white p-xl pt-0 vertical-flow-auto">
                    {
                        currentPlayList && 
                        currentPlayList.videos.map((video) => <PlaylistItem video={video} deleteVideoHandler={removeVideo} />)
                    }
                </div>
            </div>         
        </div>
    );
};