import { useAuth } from "../../contexts/auth-context";
import { useData } from "../../contexts/data-context";
import { removeFromWatchLaterVideos, addToWatchLaterVideos} from "../../service/watch-later-service";
import { addToLikedVideos, removeFromLikedVideos } from "../../service/like-video-service";
import { ResponseCode } from "../../utility/status-code";
import { useNavigator } from "../../utility/navigate";
import { useNavigate } from 'react-router-dom';

export const Video = ({ data, formStateSetter }) => {
    const { title, creator, image, _id } = data;
    const { setError, setLikedVideos, setWatchLater, likedVideoList, watchLaterList, setCurrentVideo, playList } = useData();
    const { auth } = useAuth(); 
    const navigateTo = useNavigator();

    const isLiked = likedVideoList.find(x => x._id === _id);
    const isAddedToWatchLater = watchLaterList.find(x => x._id === _id);

    const likeClickHandler = async () => {
        if(auth && auth.isAuthenticated) {
            try 
            {
                if(!isLiked) {
                    const response = await addToLikedVideos(data, auth.token);
                    if(response.status === ResponseCode.CREATED) {
                        setLikedVideos(response.data.likes);
                    }                    
                } else {
                    const response = await removeFromLikedVideos(data._id, auth.token);
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
                    const response = await addToWatchLaterVideos(data, auth.token);
                    if(response.status === ResponseCode.CREATED) {
                        setWatchLater(response.data.watchlater);
                    }                    
                } else {
                    const response = await removeFromWatchLaterVideos(data._id, auth.token);
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
                formStateSetter(true);
                setCurrentVideo(data);
            } else {
                setError("There is no Playlist!");
            }
        } else {
            navigateTo(LOGIN);
        }
    }

    return (
        <div className="card">
            <div className="card-content">
                <img src={image} className="image" alt="card-image"/>
            </div>
            <div className="card-content-header">
                <span className="secondary-header secondary font-bold">{title}</span>
                <span className="secondary-header primary">by {creator}</span>
            </div>
            <div className="card-btn-group">
                <div className="flex">
                    <button className="btn btn-round">
                        <i className="material-icons">play_arrow</i>
                    </button>
                </div>
                <div className="ml-auto flex">
                    <button className={`btn btn-round ${isLiked ? 'active' : ''}`} onClick={likeClickHandler}>
                        <i className={`material-icons ${isLiked ? 'active' : ''}`} title="like">thumb_up</i>
                    </button>
                    <button className={`btn btn-round ${isAddedToWatchLater ? 'active' : ''}`} onClick={WatchListClickHandler}>
                        <i className={`material-icons ${isAddedToWatchLater ? 'active' : ''}`} title="add to watch later">watch_later</i>
                    </button>
                    <button className="btn btn-round" onClick={playListClickHandler}>
                        <i className="material-icons" title="add to playlist">playlist_add</i>
                    </button>
                    {/* To-do functionality */}
                    {/* <button className="btn btn-round">
                        <i className="material-icons">share</i>
                    </button> */}
                </div>
            </div>
        </div>
    );
}