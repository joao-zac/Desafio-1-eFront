import { useId, useState } from 'react'
import './stylesForm.css'
import '../types/typesprops'

const Form:React.FC<FormProps> = ({ enabled, setEnabled })=> {

  const [emailInputId, nomeInputId] = useId();
  const [data, setData] = useState<object>({nome:'', email:''});
  
  return (
    <form>
        
      <label htmlFor={nomeInputId}>Nome</label>
      <input 
      id={nomeInputId} 
      name="nome" 
      type="text" 
      onMouseOut={ 
        (e) => {setData({nome:(e.target as HTMLInputElement).value })
      }} 
      />

      <label htmlFor={emailInputId}>Email</label>
      <input 
      id={emailInputId} 
      name="email" 
      type="email" 
      onMouseOut={ 
        (e) => {setData({nome:(e.target as HTMLInputElement).value })
      }} 
      />
        
      <button onClick={(e) => {
        setEnabled(!enabled) 
        e.preventDefault()
        console.log(data)
      }}
      >Enviar</button>
      
    </form>
  )
}

export default Form
