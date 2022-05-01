import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const [isMenu, setMenu] = useState(false);
    const [isAuth, setAuthx] = useState(false);
    const navigate = useNavigate();
    
    const menuClickHandler = () =>  {
        setMenu((value) => !value);
    }

    const logoClickHandler = () => {
        navigate("/");
    }
    
    return (
        <div>
            <nav className="nav-bar fixed">
                <div className="logo" onClick={logoClickHandler}>
                    <div className="logo-text">Video Library</div>
                </div>
                <div className="nav-action nav-search-action">
                    <input type="text" placeholder="Search" className="input search-input"/>
                    <span className="material-icons search-icon">search</span>
                </div>
                {
                    isAuth && 
                    <div className="nav-action">
                        <button className="btn btn-round" id="menu-btn" onClick={menuClickHandler}>
                            <i className="material-icons">
                                account_circle
                            </i>
                        </button>
                    </div>
                }

                {
                    !isAuth &&
                    <div className="nav-action">
                        <button className="btn" onClick={() => setAuthx((data) => !data)}> Login </button>
                    </div>
                }
                
            </nav>
            <ul className={ isMenu ? 'nav-menu nav-menu-show bg-white' :'nav-menu' }>
                <li><a className="nav-menu-link charcoal-black">My Name</a></li>
                <li><a className="nav-menu-link charcoal-black">My PlayList</a></li>
                <li><a className="nav-menu-link charcoal-black">Watch Later</a></li>
                <li><a className="nav-menu-link charcoal-black">View History</a></li>
                <li><a className="nav-menu-link charcoal-black">Liked Videos</a></li>
            </ul>
        </div>
    );
}