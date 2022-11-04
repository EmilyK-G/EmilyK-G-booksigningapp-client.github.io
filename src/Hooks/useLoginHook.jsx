import { useState } from "react";
import { useUserContext } from "./useUserContextHook";


export const useLogin = ()=>{
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch, setUserSelected } = useUserContext()

    const login = async (email, pin)=>{
        setIsLoading(true);
        setError(null);

        const response = await fetch('https://booksigning.onrender.com/api/user/login', {
            method: 'POST',
            mode: 'cors', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, pin})
        });
        const json = await response.json();

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }

        if(response.ok){
            localStorage.setItem('user', JSON.stringify(json));

            dispatch({type: 'LOGIN', payload: json});

            setIsLoading(false);
            setUserSelected([])
        }
    }

    return {login, isLoading, error}
}
