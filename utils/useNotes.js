import { createContext, useContext } from "react";

export const NotesContext = createContext()

export const useNotes = () => {

    const context = useContext(NotesContext)

    if(!context){
        return console.error("useNotes need used with NotesContext")
    }

    return context
}