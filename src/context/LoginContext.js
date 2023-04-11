import { createContext } from "react";
import { useState } from "react";

export const LoginContext = createContext() 


const MOCK_USERS = [
    {
        id: 1,
        email: 'lucas@gmail.com',
        contraseña: 'coder'
    },
    {
        id: 2,
        email: 'coder@gmail.com',
        contraseña: 'coder'
    },
    {
        id: 2,
        email: 'aguantebahia@gmail.com',
        contraseña: 'coder'
    }
]

export const LoginProvider = ({children}) => {
    const [user,setUser] = useState({
        email:null,
        logged:false
    })

    const tryLogin = (values) => {
        const match = MOCK_USERS.find((user) => user.email === values.email)

        if (match && match.contraseña === values.contraseña){
            setUser({
                logged: true,
                email: match.email
            })
        }
    }

    const logout = () => {
        setUser({
            email: null,
            logged: false
        })
    }

    return (
        <LoginContext.Provider value={{
            user,
            tryLogin,
            logout
        }}>
            {children}
        </LoginContext.Provider>
    )
}