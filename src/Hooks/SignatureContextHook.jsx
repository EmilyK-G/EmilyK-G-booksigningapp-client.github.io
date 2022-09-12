import { SignatureContext } from "../contexts/SignatureContext";
import { useContext } from 'react';

export const useSignaturesContext = () => {
    const context = useContext(SignatureContext)

    if (!context) {
        throw Error('useSignatureContext must be used inside a WorkoutContextProvider')
    }

    return context
}