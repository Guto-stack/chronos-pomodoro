import type { TaskStateModel } from "../../models/TaskStateModel";

export const initialTaskState: TaskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formatedSecondsRemaining: '00:00',
    activeTasks: null,
    currentCycle: 0,
    config: {
        workTime: 1,
        shortBreakTime: 1,
        longBreakTime: 1,
    },
};