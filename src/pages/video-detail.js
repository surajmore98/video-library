import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navbar } from "../components/nav-bar";
import { useAuth } from "../contexts/auth-context";
import { useData } from "../contexts/data-context";
import { removeFromWatchLaterVideos, addToWatchLaterVideos} from "../service/watch-later-service";
import { addToLikedVideos, removeFromLikedVideos } from "../service/like-video-service";
import { addToHistoryVideos } from "../service/history-service";
import { SelectPlayList } from "../components/video-list/select-play-list";
import { SnackBar } from "../components/snack-bar";
import { ResponseCode } from "../utility/status-code";
import { useNavigator } from "../utility/navigate";
import { LOGIN } from "../utility/route-variables";
import { getVideoUrl } from "../utility/video-utils";

export const VideoDetail = () => {
    const { id } = useParams();
    const { auth } = useAuth();
    const { videos, likedVideoList, watchLaterList, playList, error, setError, setHistory
        ,setCurrentVideo, setWatchLater , setLikedVideos} = useData();
    const navigateTo = useNavigator();
    const [showForm, setShowForm] = useState(false);

    const video = videos.find(x => x._id === id);
    const isLiked = likedVideoList.find(x => x._id === id);
    const isAddedToWatchLater = watchLaterList.find(x => x._id === id);


    useEffect((() => {
        (async () => {
            if(auth && auth.isAuthenticated && video) {
                try {
                    const response = await addToHistoryVideos(video, auth.token);
                    if(response.status === ResponseCode.CREATED) {
                        setHistory(response.data.history);
                    }
                } catch(e) {
                    if(e && e.response.status !== ResponseCode.CONFLICT) {
                        console.error(e);
                        setError(e.response.data['errors']);
                    }
                }
            }
        })();  
    }), [videos])

    const likeClickHandler = async () => {
        if(auth && auth.isAuthenticated) {
            try 
            {
                if(!isLiked) {
                    const response = await addToLikedVideos(video, auth.token);
                    if(response.status === ResponseCode.CREATED) {
                        setLikedVideos(response.data.likes);
                    }                    
                } else {
                    const response = await removeFromLikedVideos(video._id, auth.token);
                    if(response.status === ResponseCode.OK) {
                        setLikedVideos(response.data.likes);
                    }
                }

            } catch(e) {
                console.error(e);
                setError(e.response.data['errors']);
            }
        } else {
            navigateTo(LOGIN);
        }
    }

    const WatchListClickHandler = async () => {
        if(auth && auth.isAuthenticated) {
            try 
            {
                if(!isAddedToWatchLater) {
                    const response = await addToWatchLaterVideos(video, auth.token);
                    if(response.status === ResponseCode.CREATED) {
                        setWatchLater(response.data.watchlater);
                    }                    
                } else {
                    const response = await removeFromWatchLaterVideos(video._id, auth.token);
                    if(response.status === ResponseCode.OK) {
                        setWatchLater(response.data.watchlater);
                    }
                }
            } catch(e) {
                console.error(e);
                setError(e.response.data['errors']);
            }
        } else {
            navigateTo(LOGIN);
        }
    }

    const playListClickHandler = () => {
        if(auth && auth.isAuthenticated) {
            if(playList && playList.length > 0) {
                setShowForm(true);
                setCurrentVideo(video);
            } else {
                setError("There is no Playlist!");
            }
        } else {
            navigateTo(LOGIN);
        }
    }
    
    return (
        <div>
            <Navbar/>
            <div className="container">
                {
                    video ? 
                    <>
                        <div className="media-full">
                            <iframe height="480" width="100%"  
                            src={getVideoUrl(id)}>
                            </iframe>
                        </div>
                        <div className="media-content">
                            <h2 className="secondary">{video.title} | {video.category} | {video.type} </h2>
                            <div className="flex">
                                <h3 className="primary">by {video.creator} </h3>
                                <div className="flex ml-auto">
                                    <button className={`btn btn-round ${isLiked ? 'active' : ''}`} onClick={likeClickHandler}>
                                        <i className={`material-icons ${isLiked ? 'active' : ''}`} title="like">thumb_up</i>
                                    </button>
                                    <button className={`btn btn-round ${isAddedToWatchLater ? 'active' : ''}`} onClick={WatchListClickHandler}>
                                        <i className={`material-icons ${isAddedToWatchLater ? 'active' : ''}`} title="add to watch later">watch_later</i>
                                    </button>
                                    <button className="btn btn-round" onClick={playListClickHandler}>
                                        <i className="material-icons" title="add to playlist">playlist_add</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="border-top-black media-sub-content">
                            <div className="m-md"><span className="chip bg-info white">{video.category}</span> <span className="chip bg-info white">{video.type}</span></div>
                            <p>{video.description}</p>
                        </div>
                        { showForm && <SelectPlayList formStateSetter={setShowForm}/> }
                        { error && <SnackBar/> }
                    </> : <></>
                }
            </div>
        </div>
    );
}