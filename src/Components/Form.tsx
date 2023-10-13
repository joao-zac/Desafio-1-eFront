import './stylesForm.css'

const Form = () => {
  return (
    <form action="">
        <label htmlFor="Nome">Nome</label>
        <input name='Nome' type="text" />

        <label htmlFor="Nome">Email</label>
        <input type="text" />

        <button>Enviar</button>
    </form>
  )
}

export default Form