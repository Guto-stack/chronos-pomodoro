import { Home } from './pages/Home';


import './style/theme.css';
import './style/global.css';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';



export function App() {

 return (
 <TaskContextProvider>
 <Home />; 
</TaskContextProvider>
    );
}
