import './App.css'
import Form from './Components/Form'
import Header from './Components/Header'

function App() {

  return (
    <>
      <Header />
      
      <div className="container">

      
        <h1>Seja bem-vindo a <span className='break'>sua melhor newsletter</span></h1>

        <h3>Fique por dentro de todas as novidades</h3>

        <div className="form-card">
          
          <p>
            preencha os campos para receber as notícias
            sobre programação
          </p>
          
          <Form />

        </div>

      </div>
    </>
  )
}

export default App
