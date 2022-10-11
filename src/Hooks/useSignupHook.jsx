import { useState } from "react";
import { useUserContext } from "./useUserContextHook";

export const useSignup = ()=> {
    const[error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useUserContext()

    const signup = async(name, last_name, email, pin, class_of, img, signature) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/user/signup', {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, last_name, email, pin, class_of, img, signature})
        })
        const json = await response.json()

        if (!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok){
            //save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            //update UserContext
            dispatch({type:'LOGIN', payload: json})

            setIsLoading(false)
        }
    }

    return {signup, isLoading, error}
}