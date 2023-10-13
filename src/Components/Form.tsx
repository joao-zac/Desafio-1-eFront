import './stylesForm.css'
import { useId } from 'react'

const Form = () => {

  const [emailInputId, nomeInputId] = useId();

  return (
    <form>
        
      <label htmlFor={nomeInputId}>Nome</label>
      <input id={nomeInputId} name="nome" type="text" />
  
      <label htmlFor={emailInputId}>Email</label>
      <input id={emailInputId} name="email" type="email" />
        
      <button>Enviar</button>
      
    </form>
  )
}

export default Form