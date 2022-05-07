import { useState } from "react";
import { useAuth } from "../contexts/auth-context";
import { useData } from "../contexts/data-context";
import { addToPlayList } from "../service/play-list-service";

const currentDate = () => new Date().toLocaleDateString("en-in");

export const AddPlayList = ({ parentSetHandler }) => {
    const [detail, setDetail] = useState({ title: "", description: "", updateDate: "" });
    const { auth } = useAuth();
    const { setPlayList } = useData();
    const closeForm = (e) => {
        e.preventDefault();
        parentSetHandler(false);
    };

    const submitFormhandler = async (e) => {
        e.preventDefault();
        try {
            const response = await addToPlayList(detail, auth.token);
            if(response.status === 201) {
                setPlayList(response.data.playlists);
            }
        } catch(e) {
            console.error(e);
        }
        parentSetHandler(false);
    }

    const inputChangeHandler = (value, type) => setDetail({...detail , [type]: value, updateDate: currentDate()}); 


    return (
        <div className="pop-up-container flex flex-center show">
            <div className="bg-charcoal-white pop-up p-md">
                <h2 className="ml-md text-center secondary">New Playlist</h2>
                <form className="flex-col" onReset={(e) => closeForm(e)} onSubmit={(e) => submitFormhandler(e)}>
                    <div className="form-field">
                        <label className="input-label charcoal-black">Name</label>
                        <div className="form-control">
                            <input type="text"
                             className="input"
                             placeholder="enter playlist name"
                             onChange={(e) => inputChangeHandler(e.target.value, "title")}
                             required />
                        </div>
                    </div>
                    <div className="form-field">
                        <label className="input-label charcoal-black">Description</label>
                        <div className="form-control">
                            <input type="text"
                             className="input"
                             placeholder="enter playlist descrription..."
                             onChange={(e) => inputChangeHandler(e.target.value, "desc")} />
                        </div>
                    </div>
                    <div className="flex btn-group m-lg">
                        <button className="btn bg-secondary white" type="submit">Save</button>
                        <button className="btn bg-charcoal-gray white" type="reset">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}