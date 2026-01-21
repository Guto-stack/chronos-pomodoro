//useReducer <- hook do React que recebe um reducer e um estado atual
// reducer <- função que recebe o estado atual e uma ação e retorna o novo estado
// state <- o estado atual
// action <- ação disparada, geralmente é um objeyo com o type e opcionalmente payload
// type <- o tipo da ação, geralmente uma string
//payload <- os dados extras enviados juntos com a action, se necessario para atualizar o  estado


import type { TaskModel } from "../../models/TaskModel"

export enum TaskActionTypes {
    START_TASK = 'START_TASK',
    INTERRUPT_TASK = 'INTERRUPT_TASK',
    RESET_STATE = 'RESET_STATE',
}

    export type TaskActionsWithPayLoad = 
    {
        type: TaskActionTypes.START_TASK; 
        payload: TaskModel;
    };

    export type TaskActionWithoutPayLoad =
|   {
        type: TaskActionTypes.INTERRUPT_TASK; 
    }
|   {
        type: TaskActionTypes.RESET_STATE; 
    };

    export type TaskActionModel =
    | TaskActionsWithPayLoad
    | TaskActionWithoutPayLoad;
