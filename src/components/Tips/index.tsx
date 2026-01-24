import type { JSX } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

type CycleType = "workTime" | "shortBreakTime" | "longBreakTime";

export function Tips(){
    const {state} = useTaskContext();
    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);

     const tipsForWhenActiveTask: Record<CycleType, JSX.Element> = {
            workTime: <span>Concentre-se por <b>{state.config.workTime}</b>min</span>,
            shortBreakTime: <span>Descanse por <b>{state.config.shortBreakTime}</b>min</span>,
            longBreakTime: <span>Descanse por <b>{state.config.longBreakTime}</b>min</span>
        };

    const tipsForWhenNoActiveTask: Record<CycleType, JSX.Element> = {
        workTime: (<span>O proximo ciclo é de <b>{state.config.workTime}</b>min</span>),
        shortBreakTime: (<span>O próximo descanso é de <b>{state.config.shortBreakTime}</b>min</span>),
        longBreakTime: <span>O próximo descanso é de <b>{state.config.longBreakTime}</b>min</span>
    };


    return(
        <>
        {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type as CycleType]}
        {!state.activeTask && tipsForWhenNoActiveTask[nextCycleType as  CycleType]}
        </>
    )
}