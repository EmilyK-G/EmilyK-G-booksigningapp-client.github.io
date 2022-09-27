import { UserContext } from "../contexts/UserContext"
import { useContext } from "react";

export const useUserContext = () => {
    const context = useContext(UserContext)

    if (!context) {
        throw Error('useUserContext must be used inside a UserContextProvider')
    }

    return context
}