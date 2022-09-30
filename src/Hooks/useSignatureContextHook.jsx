import { SignatureContext } from "../contexts/SignatureContext";
import { useContext } from 'react';

export const useSignatureContext = () => {
    const context = useContext(SignatureContext)

    if (!context) {
        throw Error('useSignatureContext must be used inside a SignatureContextProvider')
    }

    return context
}