import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { Input } from "../Input";

export function MainForm(){
    return(
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
    );
}