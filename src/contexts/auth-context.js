import React, { useContext, useEffect, useState } from 'react';

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [auth , setAuth] = useState({ token: "", isAuthenticated: false });
    const [user , setUser] = useState({});
    const localToken = localStorage.getItem("token");
    
    const updateAuth = (token, authFlag) => {
        setAuth({ token: token, isAuthenticated: authFlag });
    }

    if(localToken && auth && !auth.isAuthenticated) {
        updateAuth(localToken, true);
    }

    return (<AuthContext.Provider value={{ auth, user,
     updateAuth, setUser}}>
        {children}
    </AuthContext.Provider>);
}