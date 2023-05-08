export default function Suggestion(props) {
    return (
      <div className="sugestao">
        <div className="usuario">
          <img src={props.imagem} alt={props.usuario} />
          <div className="texto">
            <div className="nome">{props.usuario}</div>
            <div className="razao">{props.razao}</div>
          </div>
        </div>
  
        <div className="seguir">Seguir</div>
      </div>
    );
  }