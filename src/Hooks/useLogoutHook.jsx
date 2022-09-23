import { useUserContext } from "./UserContextHook"

export const useLogout = ()=>{
    const { dispatch } = useUserContext;

    const logout = () =>{
        // remove user from storage
        localStorage.removeItem('user')

        //dispatch logout action
        dispatch({type:'LOGOUT', payload:null})
    }

    return {logout}

}