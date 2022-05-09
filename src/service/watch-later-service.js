import axios from "axios";

export const addToWatchLaterVideos = async (video, token) => {
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

export const removeFromWatchLaterVideos = async (videoId, token) => {
    return await axios.delete(`/api/user/watchlater/${videoId}`,
    {
        headers: {
            authorization: token
        }
    });
}