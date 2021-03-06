import axios from "axios";
import React, { useEffect, useContext, useState } from 'react';
import { getPlayListData } from "../service/play-list-service";
import { ResponseCode } from "../utility/status-code";

const DataContext = React.createContext();
export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [videos, setVideos] = useState([]);
    const [currentCategory, setCurrentCategory] = useState("");
    const [watchLaterList, setWatchLater] = useState([]);
    const [likedVideoList, setLikedVideos] = useState([]);
    const [playList, setPlayList] = useState([]);
    const [history, setHistory] = useState([]);
    const [currentVideo, setCurrentVideo] = useState({});
    const [error, setError] = useState("");

    //get categories
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("/api/categories");
                if(response) {
                    setCategories(response.data.categories);
                }
            } catch(ex) {
                console.error(ex.message);
            }
        })();
    }, []);

    //get videos
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("/api/videos");
                if(response) {
                    setVideos(response.data.videos);
                }
            } catch(ex) {
                console.error(ex.message);
            }
        })();
    }, []);

    //get Playlist 
    const setPlayListData = async (token) => {
        try {
            const response = await getPlayListData(token);
            if(response.status === ResponseCode.OK) {
                setPlayList(response.data.playlists);
            }
        } catch(ex) {
            console.error(ex.message);
        }
    }

    const data = { categories, videos, currentCategory, watchLaterList,
        error, likedVideoList, playList, currentVideo, history,
        setCurrentCategory, setLikedVideos, setError, setWatchLater,
        setPlayList, setCurrentVideo, setPlayListData, setHistory };

    return (
        <DataContext.Provider value ={data}>
            { children }
        </DataContext.Provider>
    );
}