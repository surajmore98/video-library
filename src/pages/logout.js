import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from '../contexts/auth-context';

export const Logout = () => {
    const { updateAuth } = useAuth();
    const navigate = useNavigate();
    
    useEffect(()=> {
        updateAuth("", false);
        localStorage.removeItem("token");
    },[]);

    function navigateToLogin() {
        navigate("/login");
    }

    return (
        <div className="main-content register-container">
            <div className="register">
                <div className="header">
                    <p>You are Logged Out, Please Sign in Again.</p>
                </div>
                <button className="btn bg-info white p-sm" onClick={navigateToLogin}>Sign In</button> 
            </div>
        </div>

    );
}