import "./stylesInformCard.css";
import "../types/typesprops";

const InformCard: React.FC<FormProps> = ({ enabled, setEnabled, status }) => {
  const aux = { color: "#04D361" };
  const aux2 = { color: "#FF3E3E" };

  return (
    <div className="menssage">
      {status == true ? (
        <span>
          E-mail cadastrado com <span style={aux}>sucesso!</span>
        </span>
      ) : (
        <span>
          E-mail <span style={aux2}>não</span> cadastrado!
        </span>
      )}
      <button onClick={() => setEnabled(!enabled)}>Fechar</button>
    </div>
  );
};

export default InformCard;
