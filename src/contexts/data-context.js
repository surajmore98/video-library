import axios from "axios";
import React, { useEffect, useContext, useState } from 'react';

const DataContext = React.createContext();
export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [videos, setVideos] = useState([]);
    const [currentCategory, setCurrentCategory] = useState("");
    const [watchLaterList, setWatchLater] = useState([]);
    const [likedVideoList, setLikedVideos] = useState([]);
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
    
    //get watchlaterList 
    const getLikedVideos = async (token) => {
        try {
            const response = await axios.get("/api/user/likes",
            {
                headers: {
                    authorization: token
                }
            });

            if(response.status === 200) {
                console.log(response.data);
                setLikedVideos(response.data.likes);
            }
        } catch(ex) {
            console.error(ex.message);
        }
    }

    const data = { categories, videos, currentCategory, watchLaterList, error,
        likedVideoList,
        setCurrentCategory, getLikedVideos, setError, setLikedVideos,
        setWatchLater };

    return (
        <DataContext.Provider value ={data}>
            { children }
        </DataContext.Provider>
    );
}