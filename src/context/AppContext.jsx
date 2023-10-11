import { createContext } from "react"

export const ContextPrincipal = createContext()

export const AppContext = ({children}) =>{



    return(
        <ContextPrincipal.Provider>
            {children}
        </ContextPrincipal.Provider>

    )

}