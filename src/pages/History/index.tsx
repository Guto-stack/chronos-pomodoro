import { TrashIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { DefaultButton } from "../../components/DefaultButton";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";

import style from './style.module.css';
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { formatDate } from "../../utils/formatDate";
import { getTaskStatus } from "../../utils/getTaskStatus";
import { sortTasks, type SortTaskOptions } from "../../utils/sortTasks";
import { useEffect, useState } from "react";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";


export function History() {
  const {state, dispatch} = useTaskContext();
  const hasTasks = state.tasks.length > 0;

  const [sortTasksOptions, setSortTaskOptions] = useState<SortTaskOptions>(() => {
    return {
      tasks: sortTasks({ tasks: state.tasks}),
      field: 'startDate',
      direction: 'desc',
    };
  },
);

  useEffect(() => {
    setSortTaskOptions(prevState => ({
      ...prevState,
      tasks: sortTasks({
        tasks: state.tasks,
        direction: prevState.direction,
        field: prevState.field,
      }),
    }));
  }, [state.tasks]);

  useEffect(() => {
        document.title = 'Histórico - Chronos Pomodoro'
    }, []);

function handleSortTasks({ field }: Pick<SortTaskOptions, 'field'>) {
  const newDirection = sortTasksOptions.direction === 'desc' ? 'asc' : 'desc'
  
  setSortTaskOptions({
    tasks: sortTasks({
      direction: newDirection,
      tasks: sortTasksOptions.tasks,
      field,
    }),
    direction: newDirection,
    field,
  });
}

  function handleResetHistory() {
      if(!confirm('Tem certeza que deseja apagar o historico?')) return

      dispatch({ type: TaskActionTypes.RESET_STATE})
  }

 return (
    <MainTemplate>
      <Container>
        <Heading>
           <span>History</span>
           {hasTasks && (
            <span className={style.buttonContainer}>
                <DefaultButton icon={<TrashIcon />} color='red'
                aria-label='Apagar todo o historico'
                title='Apagar todo o historico'
                onClick={handleResetHistory}
                />
            </span> 
           )}
        </Heading>
      </Container>
        
      <Container>
        {hasTasks &&(
        <div className={style.responsiveTable}>
          <table>
            <thead>
              <tr>
                <th onClick={() => handleSortTasks({field: 'name'})} className={style.thSort}>
                  Tarefa
                </th>
                <th onClick={() => handleSortTasks({field: 'duration'})} className={style.thSort}>
                  Duração
                </th>
                <th onClick={() => handleSortTasks({field: 'startDate'})} className={style.thSort}>
                  Data
                </th>
                <th>Status</th>
                <th>Tipo</th>
              </tr>
            </thead>

            <tbody>
              {sortTasksOptions.tasks.map(task => {
                const taskTypeDictionary = {
                  workTime: 'Foco',
                  shortBreakTime: 'Descanso curto',
                  longBreakTime: 'Descanso longo',
                };

                return (
                  <tr key={task.id}>
                    <td>{task.name}</td>
                    <td>{task.duration}</td>
                    <td>{formatDate(task.startDate)}</td>
                    <td>{getTaskStatus(task, state.activeTask)}</td>
                    <td>{taskTypeDictionary[task.type]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        )}

        {!hasTasks &&(
          <p style={{ textAlign: 'center', fontWeight: 'bold'}}>Ainda não existem tarefas criadas.</p>

        )}
      </Container>
    </MainTemplate>
    );
}
