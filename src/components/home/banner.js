import axios from "axios";
import { useEffect, useState } from "react";

export const Banner = () => {
    const [documentaries, setDocumenteries] = useState([]);
    const [current, setCurrent] = useState(0);
    
    const clickHandler = ({payload, type}) => {
        if(type) {
            switch(type) {
                case "prev":
                    if(current > 0) {
                        setCurrent(current - 1);
                    }
                    break;
                case "next":
                    if(current < documentaries.length - 1) {
                        setCurrent(current + 1);
                    }
                    break;
                default:
                    break;
            }
        } else if(payload >= 0 && payload < documentaries.length) {
            setCurrent(payload);
        }
    }
    useEffect(() => {
        (
            async () => {
                try {
                    const response = await axios.get("/api/videos/documentry");
                    if(response) {
                        const data = response.data.videos;
                        setDocumenteries(data);
                    }
                } catch(ex) {
                    console.log(ex.message);
                    throw ex;
                }
            }
        )();
    },[]);
    

    return (
        <div className="banner-wrapper pos-rel">
            {
                documentaries && documentaries.map((item, index) => {
                    const { image, title, description } = item;
                    return (
                        <div className = {current === index ? "show banner" : "banner"} key={index}>
                            <img src={image} className= "image" />
                            <div className="banner-content">
                                <h2 className= "banner-content-title">{title}</h2>
                                <p className= "banner-content-info">{description}</p>
                                <button className= "btn banner-content-action">Watch</button>
                            </div>
                        </div>
                    );
                })
            }

            <button className="banner-action" onClick={() => clickHandler({type: "prev"})}>
                <span className="material-icons">arrow_back_ios</span>
            </button>
            <button className="banner-action right" onClick={() => clickHandler({type: "next"})}>
                <span className="material-icons">arrow_forward_ios</span>
            </button>

            <div className="text-center dot-wrapper">
                {
                    documentaries && documentaries.map((item, index) => {
                        return (
                            <span className={current === index ? "active dot ml-sm mr-sm" : "dot ml-sm mr-sm"} key={index}
                            onClick={() => clickHandler({payload: index})}></span>
                        )
                    })
                }
            </div>
        </div>
        
    );
}