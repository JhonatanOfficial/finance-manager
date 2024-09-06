"use client"

import { createContext, useContext } from "react"
import { useState } from "react"

type ContextType = {
    section: "SignIn" | "SignUp"
    setSection:  React.Dispatch<React.SetStateAction<"SignIn" | "SignUp">>
}

const context = createContext<ContextType | null>(null)

export const LoginSectionProvider = ({ children }: { children: React.ReactNode }) => {
    const [section, setSection] = useState< "SignIn" | "SignUp" >("SignIn")

    return (
        <context.Provider value={{ section, setSection}}>
            {children}
        </context.Provider>
    )
}


export const useLoginSectionProvider = () => {
    const authContext = useContext(context)

    if (!authContext) {
        throw Error("O elemento pai precisa estar envolvido com o AuthProvider")
    }

    return authContext
}