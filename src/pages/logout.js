import { useEffect } from 'react';
import { useAuth } from '../contexts/auth-context';
import { useNavigator } from '../utility/navigate';
import { LOGIN } from '../utility/route-variables';

export const Logout = () => {
    const { updateAuth } = useAuth();
    const navigateTo = useNavigator();
    
    useEffect(()=> {
        updateAuth("", false);
        localStorage.removeItem("token");
    },[]);

    return (
        <div className="main-content register-container">
            <div className="register">
                <div className="header">
                    <p>You are Logged Out, Please Sign in Again.</p>
                </div>
                <button className="btn bg-info white p-sm" onClick={() => navigateTo(LOGIN)}>Sign In</button> 
            </div>
        </div>

    );
}