import { UserContext } from "../contexts/UserContext"
import { useContext } from "react";
import { useSignatureContext } from "./useSignatureContextHook"
export const useLogout = ()=>{
    const { dispatch } = useContext(UserContext);
    const { dispatch: signatureDispatch } = useSignatureContext()

    const logout = () =>{
        // remove user from storage
        localStorage.removeItem('user')

        //dispatch logout action
        dispatch({type:'LOGOUT'})
        signatureDispatch({type: 'SET_SIGNATURES', payload: null})
    }

    return {logout}

}