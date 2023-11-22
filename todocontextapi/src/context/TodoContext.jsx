import { createContext,useContext } from "react";

export const TodoContext=createContext({
    todos:[{
        id:1,
        todoMessage:"Todo msg",
        completed:false
    }],
    addTodo:(todo)=>{},
    updatedTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
});

export const TodoProvider=TodoContext.Provider;

//custom hook
export const useTodo=()=>{
    return useContext(TodoContext);
}
