import "./App.css";
import Form from "./Components/Form";
import Header from "./Components/Header";
import InformCard from "./Components/InformCard";
import { useState } from "react";

function App() {
  const [enabled, setEnabled] = useState<boolean>(false);
  const [status, setStatus] = useState<boolean>(false);

  return (
    <>
      <Header />

      <div className="container">
        <h1>
          Seja bem-vindo a <span className="break">sua melhor newsletter</span>
        </h1>

        <h3>Fique por dentro de todas as novidades</h3>

        <div className="form-card">
          <p>preencha os campos para receber as notícias sobre programação</p>

          <Form
            enabled={enabled}
            setEnabled={setEnabled}
            status={status}
            setStatus={setStatus}
          />
        </div>
      </div>

      {enabled == true ? (
        <InformCard
          enabled={enabled}
          setEnabled={setEnabled}
          status={status}
          setStatus={setStatus}
        />
      ) : null}
    </>
  );
}

export default App;
