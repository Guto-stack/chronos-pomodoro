import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { Input } from "../Input";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";


export function MainForm(){

  const { setState, state } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement> ){
    event.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName){
      alert('Digite o nome da tarefa');
      return
   }

   const newTask: TaskModel = {
    id: Date.now().toString(),
    name: taskName,
    startDate: Date.now(),
    completeDate: null,
    interruptDate: null,
    duration: state.config[nextCycleType],
    type: nextCycleType,
   };

   const secondsRemaining = newTask.duration * 60

  setState(prevState => {
    return {
      ...prevState,
      config: {...prevState.config},
      activeTask: newTask,
      currentCycle: nextCycle,
      secondsRemaining, //conferir
      formatedSecondsRemaining: formatSecondsToMinutes(secondsRemaining), //conferir
      tasks: [...prevState.tasks, newTask]
      };
    });

  }

  function handleInterruptTask(){
     setState(prevState => {
    return {
        ...prevState,
        activeTask: null,
        secondsRemaining: 0,
        formatedSecondsRemaining: '00:00',
        tasks: prevState.tasks.map(task => {
          if(prevState.activeTask.id && prevState.activeTask.id === task.id) {
          return {...task, interruptDate: Date.now() };
          }
          return task;
        }),
      };
    });
  }

    return(
         <form onSubmit={handleCreateNewTask} className='form' action="">
                    <div className="formRow">
                      <Input 
                      labelText= 'task' 
                      type='text' 
                      id='meuInput' 
                      placeholder='Digite algo'
                      ref={taskNameInput}
                      disabled = {!!state.activeTask}
                      />
                    </div>
        
                    <div className="formRow">
                      <p>Inserindo texto</p>
                    </div>
        
                    {state.currentCycle > 0 && (
                    <div className="formRow">
                      <Cycles />
                    </div>
                    )}
        
                    <div className="formRow">
                      {!state.activeTask ? (
                        <DefaultButton 
                          aria-label ='Iniciar Nova tarefa'  
                          title="Iniciar nova tarefa" 
                          type='submit' 
                          icon={<PlayCircleIcon />} 
                          key='Este é o botao de submit'
                        />
                      ) : (
                        <DefaultButton 
                          aria-label ='Parar tarefa atual'  
                          title="Parar tarefa atual" 
                          type='button' 
                          color='red'
                          icon={<StopCircleIcon />} 
                          onClick={handleInterruptTask}
                          key='Não enviar o form'
                        />
                       )} 
                    </div>
                  </form>
    );
}