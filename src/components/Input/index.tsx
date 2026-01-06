import style from './style.module.css';

type InputProps = {
    id: string;
    labelText?: string;
} & React.ComponentProps<'input'>;


export function Input({id,type, labelText, ...rest}:InputProps){
    return(
        <>
        
        {labelText && <label htmlFor={id}>{labelText}</label> }
        <input className={style.input} id={id} type={type} {...rest} />
       </>
    );

}