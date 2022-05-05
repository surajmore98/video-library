import axios from "axios";

export const addToPlayList =  async (data, token) => {
    return await axios.post("api/user/playlists", {
        playlist: data
    },
    {
        headers: {
            authorization: token
        }
    });
}

export const removeVideoFromPlaylist = async (playListId, videoId, token) => {
    return axios.delete(`/api/user/playlists/${playListId}/${videoId}`,
    {
        headers: {
            authorization: token
        }
    });
}

export const removePlaylist = async (id, token) => {
    return await axios.delete(`api/user/playlists/${id}`,
    {
        headers: {
            authorization: token
        }
    });
}


export const getPlayListData = async (token) => {
    return await axios.get("/api/user/playlists",
    {
        headers: {
            authorization: token
        }
    });
}
