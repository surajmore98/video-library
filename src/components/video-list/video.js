import { useAuth } from "../../contexts/auth-context";
import { useData } from "../../contexts/data-context";
import { useNavigate } from 'react-router-dom';

export const Video = ({ data, formStateSetter }) => {
    const { title, creator, image, _id } = data;
    const { setError, setLikedVideos, setWatchLater, likedVideoList, watchLaterList, setCurrentVideo, playList } = useData();
    const { auth } = useAuth(); 
    const navigate = useNavigate();
    const isLiked = likedVideoList.find(x => x._id === _id);
    const isAddedToWatchLater = watchLaterList.find(x => x._id === _id);

    const playListClickHandler = () => {
        if(auth && auth.isAuthenticated) {
            if(playList && playList.length > 0) {
                formStateSetter(true);
                setCurrentVideo(data);
            } else {
                setError("There is no Playlist!");
            }
        } else {
            navigate("/login", {replace: true});
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
                    <button className={`btn btn-round ${isLiked ? 'active' : ''}`}>
                        <i className={`material-icons ${isLiked ? 'active' : ''}`} title="like">thumb_up</i>
                    </button>
                    <button className={`btn btn-round ${isAddedToWatchLater ? 'active' : ''}`}>
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