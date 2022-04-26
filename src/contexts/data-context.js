import axios from "axios";
import React, { useEffect, useContext, useState } from 'react';

const DataContext = React.createContext();
export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [videos, setVideos] = useState([]);

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
    
    const data = { categories, videos };
    return (
        <DataContext.Provider value ={data}>
            { children }
        </DataContext.Provider>
    );
}