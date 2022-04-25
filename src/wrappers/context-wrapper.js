import { AuthProvider } from "../contexts/auth-context"
import { DataProvider } from "../contexts/data-context"

export const ContextWrapper = ({ children }) => {
    return(
        <AuthProvider>
            <DataProvider>
                { children }
            </DataProvider>
        </AuthProvider>
    )
}