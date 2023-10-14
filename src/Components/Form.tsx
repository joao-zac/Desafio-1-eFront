import { useId, useState } from 'react'
import './stylesForm.css'
import '../types/typesprops'

const Form:React.FC<FormProps> = ({ enabled, setEnabled })=> {

  const [emailInputId, nomeInputId] = useId();
  const [valid, setValid] = useState<boolean>();
  
  return (
    <form>
        
      <label htmlFor={nomeInputId}>Nome</label>
      <input id={nomeInputId} name="nome" type="text" />
  
      <label htmlFor={emailInputId}>Email</label>
      <input id={emailInputId} name="email" type="email" />
        
      <button onClick={(e) => {
        setEnabled(!enabled) 
        e.preventDefault()
      }}
      >Enviar</button>
      
    </form>
  )
}

export default Form
