import './style/theme.css';
import './style/global.css';
import { Heading } from './components/Heading';

export function App(){
    console.log('Opa!');

    return (
    <div>
      <Heading>Olá Mundo!</Heading>
      <Heading>Olá Mundo!1</Heading>
      <Heading>Olá Mundo!2</Heading>
      <Heading>Olá Mundo!3</Heading>
      <p>Bem vindo ao meu primeiro projeto!</p>
    </div>
    );
}
