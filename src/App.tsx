import './style/theme.css';
import './style/global.css';
import { Heading } from './components/Heading';

export function App(){
    console.log('Opa!');

    return (
    <div>
      <Heading />
      <p>Bem vindo ao meu primeiro projeto!</p>
    </div>
    );
}
