import { createContext } from "react";
import { doctors } from "../assets/assets_frontend/assets";

export const AppContext = createContext()

const AppContextProvider = (props) =>{

    const currenceSymbol = '$'

    const value = {
        doctors,
        currenceSymbol
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider