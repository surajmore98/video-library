import { useAuth } from "../contexts/auth-context"
import { Login } from "../pages/login";

export const RequireAuth = ({ children }) => {
    const { auth } = useAuth();

    if(auth && auth.isAuthenticated) {
        return children;
    }

    return <Login replace={true}/>
}