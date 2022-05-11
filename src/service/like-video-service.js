import axios from "axios";

// add to Liked videolist
export const addToLikedVideos = async (video, token) => {
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
export const removeFromLikedVideos = async (videoId, token) => {
    return await axios.delete(`/api/user/likes/${videoId}`,
    {
        headers: {
            authorization: token
        }
    });
}

export const getLikedVideoData = async (token) => {
    await axios.get("/api/user/likes",
    {
        headers: {
            authorization: token
        }
    });
}
