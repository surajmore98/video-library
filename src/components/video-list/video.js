import { useState } from "react";
import { useAuth } from "../../contexts/auth-context";
import { useData } from "../../contexts/data-context";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

// add to Liked videolist
const addToLikedVideos = async (video, token) => {
    return await axios.post("/api/user/likes",
    {
        video: video 
    },
    {
        headers: {
            authorization: token
        }
    });
}

// remove from liked videolist
const removeFromLikedVideos = async (videoId, token) => {
    return await axios.delete(`/api/user/likes/${videoId}`,
    {
        headers: {
            authorization: token
        }
    });
}

// add to Liked videolist
const addToWatchLaterVideos = async (video, token) => {
    return await axios.post("/api/user/watchlater",
    {
        video: video 
    },
    {
        headers: {
            authorization: token
        }
    });
}

// remove from liked videolist
const removeFromWatchLaterVideos = async (videoId, token) => {
    return await axios.delete(`/api/user/watchlater/${videoId}`,
    {
        headers: {
            authorization: token
        }
    });
}

export const Video = ({ data }) => {
    const { title, creator, image, _id } = data;
    const { setError, setLikedVideos, setWatchLater, likedVideoList, watchLaterList } = useData();
    const { auth } = useAuth(); 
    const navigate = useNavigate();
    const isLiked = likedVideoList.find(x => x._id === _id);
    const isAddedToWatchLater = watchLaterList.find(x => x._id === _id);

    const likeClickHandler = async () => {
        if(auth && auth.isAuthenticated) {
            try 
            {
                if(!isLiked) {
                    const response = await addToLikedVideos(data, auth.token);
                    if(response.status === 201) {
                        setLikedVideos(response.data.likes);
                    }                    
                } else {
                    const response = await removeFromLikedVideos(data._id, auth.token);
                    if(response.status === 200) {
                        setLikedVideos(response.data.likes);
                    }
                }

            } catch(e) {
                console.error(e);
                setError(e.response.data['errors']);
            }
        } else {
            navigate("/login", {replace: true});
        }
    }

    const WatchListClickHandler = async () => {
        if(auth && auth.isAuthenticated) {
            try 
            {
                if(!isAddedToWatchLater) {
                    const response = await addToWatchLaterVideos(data, auth.token);
                    if(response.status === 201) {
                        setWatchLater(response.data.watchlater);
                    }                    
                } else {
                    const response = await removeFromWatchLaterVideos(data._id, auth.token);
                    if(response.status === 200) {
                        setWatchLater(response.data.watchlater);
                    }
                }
            } catch(e) {
                console.error(e);
                setError(e.response.data['errors']);
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
                    <button className={`btn btn-round ${isLiked ? 'active' : ''}`} onClick={likeClickHandler}>
                        <i className={`material-icons ${isLiked ? 'active' : ''}`} title="like">thumb_up</i>
                    </button>
                    <button className={`btn btn-round ${isAddedToWatchLater ? 'active' : ''}`} onClick={WatchListClickHandler}>
                        <i className={`material-icons ${isAddedToWatchLater ? 'active' : ''}`} title="add to watch later">watch_later</i>
                    </button>
                    <button className="btn btn-round" onClick={() => iconClickHandler("menu")}>
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