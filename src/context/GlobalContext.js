import { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";

const GlobalContext = createContext()

export const GlobalProvider  = ({children}) => {
  

    const initialState = {
        todos : [],
        edit : {
            todo : {},
            isEdit : false
        }
    }

    

    const [state , dispatch] = useReducer(GlobalReducer , initialState)


    // Save Todo
    const saveTodo = (text) => {
        const newTodo = {
            id : crypto.randomUUID(),
            text : text
        }

       dispatch({
        type : "SAVE_TODO",
        payload : newTodo
       })
       
       
    }


    const deleteTodo = (id) => {
       dispatch({
        type : "DELETE_TODO",
        payload : id
       })
    }

    // edit
    const editTodo = (todo) => {
       dispatch({
        type : "EDIT_TODO",
        payload : todo
       })
    }

    // Update
    const updateTodo = (id , text) => {
        
        const newTodo = {
            id : id,
            text : text
        }

        dispatch({
            type : "UPDATE_TODO",
            payload : newTodo
        })

    }

    const resetTodo = () => {
        dispatch({
            type : "RESET",
            payload : []
        })
    }
  
    return (
        <GlobalContext.Provider value={{
            todos : state.todos,
            edit : state.edit,
            saveTodo,
            deleteTodo,
            editTodo,
            updateTodo,
            resetTodo
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext