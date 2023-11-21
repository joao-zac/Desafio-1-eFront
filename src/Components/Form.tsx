import { useId, useState } from "react";
import "./stylesForm.css";
import "../types/typesprops";

const Form: React.FC<FormProps> = ({ enabled, setEnabled, setStatus }) => {
  const [emailInputId, nomeInputId] = useId();
  const [dado, setDado] = useState<IForm>({ nome: "", email: "" });

  const handleClick = (e: any) => {
    setEnabled(!enabled);

    if (dado.nome != "" && dado.email != "") {
      setStatus(true);
    } else {
      setStatus(false);
    }
    e.preventDefault();
  };

  return (
    <form>
      <label htmlFor={nomeInputId}>Nome</label>
      <input
        id={nomeInputId}
        name="nome"
        type="text"
        value={dado.nome}
        onChange={(e) =>
          setDado({ ...dado, nome: e.currentTarget?.value || "" })
        }
      />

      <label htmlFor={emailInputId}>Email</label>
      <input
        id={emailInputId}
        name="email"
        type="email"
        value={dado.email}
        onChange={(e) =>
          setDado({ ...dado, email: e.currentTarget?.value || "" })
        }
      />

      <button onClick={handleClick}>Enviar</button>
    </form>
  );
};

export default Form;
