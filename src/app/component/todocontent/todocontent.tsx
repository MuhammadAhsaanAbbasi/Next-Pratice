import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            todo:'',
            id:Math.floor(Math.random()*9999999999),
            completed:false,
        }
    ],
    addTodo:(todo:any)=>{},
    UpdateTodo:(id:any,todo:any)=>{},
    DeleteTodo:(id:any)=>{},
    toggleComplete:(id:any)=>{},
})

export const TodoProvider = TodoContext.Provider

export function useTodo(){
    return useContext(TodoContext)
}