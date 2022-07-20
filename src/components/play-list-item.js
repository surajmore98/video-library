import { useNavigator } from "../utility/navigate";
import { VIDEODETAIL } from "../utility/route-variables";
import { getImageUrl } from "../utility/video-utils";

export const PlaylistItem = ({ video, deleteVideoHandler }) => {
    const { _id, title, category} = video;
    const navigateTo = useNavigator();

    return (
        <div className="playlist border-bottom-black p-md">
            <img src={getImageUrl(_id)} className="playlist-image" /> 
            <div className="playlist-detail">
                <div className="playlist-sub-detail">
                    <div className="font-bold font-lg">
                        <span className="info">{title}</span>
                    </div>
                    <button className="btn btn-round bg-charcoal-white ml-auto"
                    onClick={() => deleteVideoHandler(_id)}>
                        <i className="material-icons">delete</i>
                    </button>                                
                </div>
                <div className="font-semi-bold">{category}</div> 
                <button className="btn bg-success-dark white font-bold mt-lg" onClick={() => navigateTo(VIDEODETAIL, _id)}>
                    View
                </button>
            </div>
        </div>
    );
}