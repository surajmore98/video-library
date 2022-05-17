import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../contexts/data-context";
import { useNavigator } from "../../utility/navigate";
import { VIDEODETAIL } from "../../utility/route-variables";

export const Search = () => {
    const { videos } = useData();
    const [suggestions, setSuggetions] = useState([]);
    const [searchText, setSearch] = useState("");
    const navigateTo = useNavigator();

    const searchInputChange = (e) => {
        const value = e.target.value;
        setSearch(value);

        if(!value){
            setSuggetions([]);
            return;
        }

        const filteredData = videos.filter(x => x.title.match(new RegExp(value, 'i')));
        if(filteredData) {
            //top 10 suggestion will be shown
            setSuggetions(filteredData.slice(0,10));
        }
    }

    const navigateToSuggestion = (id) => {
        navigateTo(VIDEODETAIL, id);
        setSuggetions([]);
    }

    const clear = () => {
        setSearch("");
        setSuggetions([]);
    }
    
    return (
        <div className="flex-col full-width flex-no-gap">
            <div className="nav-action nav-search-action">
                <span className="material-icons search-icon left">search</span>
                <input type="text"
                placeholder="Search Video"
                className="input search-input"
                value={searchText}
                onChange={searchInputChange}/>
                { searchText && <span className="material-icons search-icon right" onClick={clear}>close</span> }
            </div>
            { (suggestions && suggestions.length > 0) ?
                <ul className="search-item-list">
                    {
                        suggestions.map((item, index) => {
                        return (
                            <li className="search-item" onClick={() => navigateToSuggestion(item._id)} key={index}>{item.title}</li>
                        );
                    })}
                </ul>
                : searchText &&
                <ul className="search-item-list">
                   <li className="search-item">No Video Found!</li>
                </ul>
            }
            
        </div>
            );
}