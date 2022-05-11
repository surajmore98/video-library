import axios from "axios";

export const addToHistoryVideos = async (video, token) => {
    return await axios.post("/api/user/history",
    {
        video: video 
    },
    {
        headers: {
            authorization: token
        }
    });
}

export const removeFromHistoryVideos = async (videoId, token) => {
    return await axios.delete(`/api/user/history/${videoId}`,
    {
        headers: {
            authorization: token
        }
    });
}

export const getHistoryVideoData = async (token) => {
    await axios.get("/api/user/history",
    {
        headers: {
            authorization: token
        }
    });
}
