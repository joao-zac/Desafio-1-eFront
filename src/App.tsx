import './App.css'
import Form from './Components/Form'
import Header from './Components/Header'

function App() {

  return (
    <>
      <Header />
      
      <div className="container">

        <h1>  
          Seja bem-vindo a
          sua melhor newsletter
        </h1>

        <div className="form-card">
          
          <h3>Fique por dentro de todas as novidades</h3>
          
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
