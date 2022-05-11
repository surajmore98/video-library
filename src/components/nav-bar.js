import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";
import { useNavigator } from "../utility/navigate";
import { HOME, LOGIN } from "../utility/route-variables";

export const Navbar = () => {
    const [isMenu, setMenu] = useState(false);
    const { auth, user } = useAuth();
    const navigateTo = useNavigator();

    const menuClickHandler = () =>  {
        setMenu((value) => !value);
    }

    return (
        <div>
            <nav className="nav-bar fixed">
                <div className="logo pl-md" onClick={() => navigateTo(HOME)}>
                    <div className="logo-text">Sportz</div>
                </div>

                {
                    auth && auth.isAuthenticated && 
                    <div className="nav-action">
                        <button className="btn btn-round" id="menu-btn" onClick={menuClickHandler}>
                            <i className="material-icons">
                                account_circle
                            </i>
                        </button>
                    </div>
                }

                {
                    (!auth || auth && !auth.isAuthenticated) &&
                    <div className="nav-action">
                        <button className="btn" onClick={() => navigateTo(LOGIN)}> Login </button>
                    </div>
                }
                
            </nav>
            <ul className={ isMenu ? 'nav-menu nav-menu-show bg-white' :'nav-menu' }>
                <li className="nav-menu-link charcoal-black"> { user ? `${user.firstName} ${user.lastName}` : 'N/A' } </li>
                <li><Link className="nav-menu-link charcoal-black" to="/playlists">My Playlist</Link></li>
                <li><Link className="nav-menu-link charcoal-black" to="/watchlater">Watch Later</Link></li>
                <li><Link className="nav-menu-link charcoal-black" to="/history">History</Link></li>
                <li><Link className="nav-menu-link charcoal-black" to="/likes">Likes</Link></li>
                <li><Link className="nav-menu-link charcoal-black" to="/logout">Logout</Link></li>
            </ul>
        </div>
    );
}