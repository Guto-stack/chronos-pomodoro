import './style/theme.css';
import './style/global.css';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { Input } from './components/Input';

export function App(){

    return (
    <>
      <Container>
          <Logo />
        </Container>

        <Container>
          <Menu />
        </Container>

        <Container>
          <CountDown />
        </Container>

       <Container>
          <form className='form' action="">
            <div className="formRow">
              <Input type='text' id='meuInput' />
            </div>

            <div className="formRow">
              <p>Inserindo texto</p>
            </div>

            <div className="formRow">
              <p>Ciclos</p>
              <p>0 0 0 0 0 0</p>
            </div>

            <div className="formRow">
              <button>Enviar</button>
            </div>
          </form>
        </Container>
    </>
    );
}
