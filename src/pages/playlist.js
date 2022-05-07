import { useState } from "react";
import { AddPlayList } from "../components/add-play-list";
import { Navbar } from "../components/nav-bar";
import { useAuth } from "../contexts/auth-context";
import { useData } from "../contexts/data-context";
import { useNavigate } from "react-router-dom";
import { removePlaylist } from "../service/play-list-service";

export const PlayList = () => {
    const [showForm, setShowForm] = useState(false);
    const { playList, setPlayList } = useData();
    const { auth } = useAuth();
    const navigate = useNavigate();

    const createPlaylistHandler = () => setShowForm(!showForm);

    const deletePlayList = async (id) => {
        try {
            const response = await removePlaylist(id, auth.token);
            if(response.status === 200) {
                setPlayList(response.data.playlists);
            }
        } catch(e) {
            console.error(e);
        }
    };

    const selectPlayListHandler = (id) => {
        navigate(`/playlist/${id}`);
    }

    return (
        <>
            <Navbar/>
            <div className="container playlist-container">
                <header className="flex-col flex-center">
                    <h1 className="charcoal-black">Create Your Playlist</h1>
                    <button className="btn btn-round bg-info" onClick={createPlaylistHandler}>
                        <i className="material-icons">
                            add
                        </i>
                    </button>
                </header>
                <div className="grid grid-col-md mt-xl">
                    {
                        playList && playList.map((item) => {
                            const { title, videos, updateDate, _id } = item;
                            return (
                                <div className="list bg-tertiary primary" key={_id} onClick={() => selectPlayListHandler(_id)}>
                                    <div className="list-header">
                                        <div>
                                            {title}
                                        </div>
                                        <button className="btn btn-round bg-tertiary" onClick={() => deletePlayList(_id)}>
                                            <i className="material-icons">
                                                close
                                            </i>
                                        </button>
                                    </div>
                                    <div className="list-content">
                                        <p>{videos.length} Videos, updated on {updateDate}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                    
                    
                </div>
            </div>
            {showForm && <AddPlayList parentSetHandler={setShowForm}/>}
        </>
    );
}