import React, { useContext, useState } from 'react';

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [auth , setAuth] = useState({ token: "", isAuthenticated: false });
    return (<AuthContext.Provider value={{auth, setAuth}}>
        {children}
    </AuthContext.Provider>);
}