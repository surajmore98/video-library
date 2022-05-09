import { useNavigate } from "react-router-dom";
import { HISTORY, HOME, LIKES, LOGIN, LOGOUT, PLAYLIST, PLAYLISTS, REGISTER, VIDEODETAIL, VIDEOS, WATCHLATER } from "./route-variables";

export const useNavigator = () => {
    const navigate = useNavigate();
    const navigateTo = (path, payload) => {
        switch(path) {
            case LOGIN:
                return navigate("/login");
            case LOGOUT:
                return navigate("/logout");
            case REGISTER:
                return navigate("/register");
            case HOME:
                return navigate("/");
            case VIDEOS:
                return navigate("/videos");
            case VIDEODETAIL:
                return navigate(`/video/${payload}`);
            case PLAYLISTS:
                return navigate("/playlists");
            case PLAYLIST:
                return navigate(`/playlist/${playload}`);
            case WATCHLATER:
                return navigate("/watchlater");
            case LIKES:
                return navigate("/likes");
            case HISTORY:
                return navigate("/history");
        }
    }

    return navigateTo;
}