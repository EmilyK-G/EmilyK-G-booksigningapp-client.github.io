import { useState } from "react";

export const useSignup = ()=> {
    const[error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [success, setSuccess] = useState(null);

    const signup = async(name, last_name, email, pin, class_of, img, signature) => {
        setIsLoading(true)
        setError(null)
        setSuccess(null)

        const response = await fetch('/api/user/signup', {
            method:'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, last_name, email, pin, class_of, img, signature})
        })
        const json = await response.json()

        if (!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok){
            setSuccess(json.success)
            setIsLoading(false)
        }
        return success
    }

    return {signup, isLoading, error, success}
}