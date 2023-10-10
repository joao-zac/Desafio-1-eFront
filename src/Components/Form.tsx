<<<<<<< HEAD
const Form = () => {
  return (
    <form action="">
        <input type="text" />
        <label htmlFor="Nome">Nome</label>

        <input type="text" />
        <label htmlFor="Nome">Email</label>
=======
import './stylesForm.css'

const Form = () => {
  return (
    <form action="">
        <label htmlFor="Nome">Nome</label>
        <input name='Nome' type="text" />

        <label htmlFor="Nome">Email</label>
        <input type="text" />
>>>>>>> 65496ce (:lipstick: feat: Estilizaçao do corpo do projeto)

        <button>Enviar</button>
    </form>
  )
}

export default Form