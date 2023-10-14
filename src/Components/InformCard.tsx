import './stylesInformCard.css'
import '../types/typesprops'

const InformCard:React.FC<FormProps> = ({enabled, setEnabled}) => {
  return (
    <div className='menssage'>
    
      <span>E-mail cadastrado com sucesso!</span>
      <button onClick={() => setEnabled(!enabled)}>Fechar</button>

    </div>
  )
}

export default InformCard