import type { TaskModel } from "./TaskModel";

export type TaskStateModel = {
    activeTask: any;
    tasks: TaskModel[];
    secondsRemaining: number;
    formatedSecondsRemaining: string;
    activeTasks: TaskModel | null;
    currentCycle: number;
    config: {
        workTime: number;
        shortBreakTime: number;
        longBreakTime: number;
    };
};