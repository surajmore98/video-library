import { useState } from "react";

export const Video = ({ data }) => {
    const { title, creator, image } = data;
    const [ activity, setActivity] = useState({isMenu: false, isLiked: false, isDisLiked: false});
    return (
        <div className="card">
            <div className="card-content">
                <img src={image} className="image" alt="card-image"/>
                <div className="card-content-header card-content-header-fixed"> 
                    <span className="primary-header white">{title}</span>
                    <span className="secondary-header white">by {creator}</span>
                </div>
            </div>
            <div className="card-btn-group">
                <div className="flex">
                    <button className="btn btn-round">
                        <i className="material-icons">play_arrow</i>
                    </button>
                    <button className="btn btn-round">
                        <i className="material-icons">thumb_up</i>
                    </button>
                    <button className="btn btn-round">
                        <i className="material-icons">thumb_down</i>
                    </button>
                </div>
                <div className="ml-auto">
                    <button className="btn btn-round" onClick={() => setActive((data) => !data)}>
                        <i className="material-icons">more_horiz</i>
                    </button>
                    <div className={`card-menu ${isActive ? 'card-menu-active' : ''}`}>
                        <div className="card-menu-item"><i className="material-icons">watch_later</i>Add to Watch later</div>
                        <div className="card-menu-item"><i className="material-icons">playlist_add</i>Add to Playlist</div>
                        <div className="card-menu-item"><i className="material-icons">share</i>Share</div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}