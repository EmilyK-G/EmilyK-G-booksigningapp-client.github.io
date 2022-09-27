import { useUserContext } from "./UserContextHook"
import { useSignatureContext } from "./SignatureContextHook"
export const useLogout = ()=>{
    const { dispatch } = useUserContext;
    const { dispatch: signatureDispatch } = useSignatureContext()

    const logout = () =>{
        // remove user from storage
        localStorage.removeItem('user')

        //dispatch logout action
        dispatch({type:'LOGOUT', payload:null})
        signatureDispatch({type: 'SET_SIGNATURES', payload: null})
    }

    return {logout}

}