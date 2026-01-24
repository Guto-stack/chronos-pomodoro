import { SaveIcon } from "lucide-react";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Input } from "../../components/Input";
import { MainTemplate } from "../../templates/MainTemplate";
import { DefaultButton } from "../../components/DefaultButton";
import { useEffect, useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { showMessage } from "../../adapters/showMessage";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";


export function Settings() {
  const {state, dispatch} = useTaskContext();
  const workTimeInput = useRef<HTMLInputElement>(null);
  const shortBreakTimeInput = useRef<HTMLInputElement>(null);
  const longBreakTimeInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
          document.title = 'Configurações - Chronos Pomodoro'
      }, []);

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    showMessage.dismiss();

    const formErrors = [];

    const workTime = Number(workTimeInput.current?.value);
    const shortBreakTime = Number(shortBreakTimeInput.current?.value);
    const longBreakTime = Number(longBreakTimeInput.current?.value);

    if(isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)){
      formErrors.push('Por favor use apenas numeros');
    }

    if (workTime < 1 || workTime > 99) {
      formErrors.push('Digite valores entre 1 e 99 para o foco');
    }

    if (shortBreakTime < 1 || shortBreakTime > 30) {
      formErrors.push('Digite valores entre 1 e 30 para descanso curto ');
    }

    if (longBreakTime < 1 || longBreakTime > 60) {
      formErrors.push('Digite valores entre 1 e 60 para descanso longo ');
    }

    if(formErrors.length > 0) {
      formErrors.forEach(error => {
        showMessage.error(error);
      });
      return;
    }

    dispatch({type:TaskActionTypes.CHANGE_SETTINGS,
       payload:{
          workTime,
          shortBreakTime,
          longBreakTime,
    },
  });
  showMessage.success('Configurações Salvas');
  }

 return (
    <MainTemplate>
      <Container>
        <Heading>configurações</Heading>
      </Container>

      <Container>
        <p style={{ textAlign: 'center'}}>
          Modifique as configurações de tempo de foco e descansos.
        </p>
      </Container>

      <Container>
        <form onSubmit={handleSaveSettings} action='' className='form' >
          <div className= 'formRow'>
            <Input id='wortTime' labelText='Foco' ref={workTimeInput} defaultValue={state.config.workTime} type='Number'/>
          </div>
          <div className= 'formRow'>
            <Input id='shortBreakTime' labelText='Descanso curto' ref={shortBreakTimeInput} defaultValue={state.config.shortBreakTime} type='Number'/>
          </div>
          <div className= 'formRow'>
            <Input id='longBreakTime' labelText='Descanso longo' ref={longBreakTimeInput} defaultValue={state.config.longBreakTime} type='Number'/>
          </div>
          <div className= 'formRow'>
            <DefaultButton icon={<SaveIcon />} aria-Label='Salvar configurações'
            title='Salvar configurações'
             />
          </div>
        </form>
      </Container>
    </MainTemplate>
    );
}
