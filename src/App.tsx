import './style/theme.css';
import './style/global.css';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { Input } from './components/Input';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';

export function App() {
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
              <Input labelText= 'task' type='text' id='meuInput' placeholder='Digite algo'/>
            </div>

            <div className="formRow">
              <p>Inserindo texto</p>
            </div>

            <div className="formRow">
              <Cycles />
            </div>

            <div className="formRow">
              <DefaultButton icon={<PlayCircleIcon/>} />
            </div>
          </form>
        </Container>

        <Container>
          <Footer />
        </Container>
    </>
    );
}
