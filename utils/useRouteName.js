import { createContext, useContext } from "react";

export const RouteNameContext = createContext()

export const useRouteName = () => {

    const context = useContext(RouteNameContext)

    if(!context){
        return console.error("useRouteName need used with useRoteNameContext")
    }

    return context
}