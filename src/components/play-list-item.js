export const PlaylistItem = ({ video, deleteVideoHandler }) => {
    const { _id, title, category, image} = video;
    
    return (
        <div className="playlist border-bottom-black p-md">
            <img src={image} className="playlist-image" /> 
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
            </div>
        </div>
    );
}