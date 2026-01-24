import { useContext } from "react";
import { TaskContext } from "./taskContext";



export function useTaskContext() {
    const context = useContext(TaskContext);

    if(!context){
        throw new Error(
            "useTaskContext deve ser usado dentro de TaskContextProvider"
        );
    }

    return context;
}