import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../contexts/auth-context";
import { useData } from "../../contexts/data-context";
import { addVideoToPlaylist } from "../../service/play-list-service";
import { ResponseCode } from "../../utility/status-code";

export const SelectPlayList = ({ formStateSetter }) => {
    const { currentVideo, playList, setPlayListData } = useData();
    const { auth } = useAuth();
    const [ playListId, setPlayListId] = useState();

    const selectHandler = (value) => {
        return value === playListId ?
        setPlayListId("") : setPlayListId(value);
    }

    const submitFormHandler = async (e) => {  
        e.preventDefault();
        const response  = await addVideoToPlaylist(playListId, currentVideo, auth.token);
        if(response.status === ResponseCode.CREATED) {
            await setPlayListData(auth.token);
            formStateSetter(false);
        }
    }

    const resetFormHandler = (e) => {
        e.preventDefault();
        formStateSetter(false);
    }

    return (
        <div className="form-container flex flex-center">
            <div className="bg-white p-md border-black-light fixed">
                <h3 className="primary text-center">Select Playlist</h3>
                <form className="register-content" onSubmit={(e) => submitFormHandler(e)} onReset={(e) => resetFormHandler(e)}>
                    <div className="form-fields full-width">
                        {
                            playList && playList.map((item, index) => {
                                return (
                                    <div className="form-field-section" key={index}>
                                        <div className="form-field">
                                            <label className="form-control-horizontal font-md p-sm">
                                                <input type="checkbox" name="Label" value="Label" onClick={() => selectHandler(item._id)}/>
                                                <span className="input-label register-checkbox-label">{item.title}</span>
                                            </label>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div> 
                    
                    <div className="flex full-width">
                        <button className="btn bg-primary font-bold white" type="submit">Save</button>
                        <button className="btn bg-tertiary font-bold" type="reset">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}