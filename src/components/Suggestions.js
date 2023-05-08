import Suggestion from './Suggestion'

export default function Suggestions() {
    return (
      <div className="sugestoes">
        <div className="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
  
        <Suggestion imagem="assets/img/bad.vibes.memes.svg" usuario="bad.vibes.memes" razao="Segue você" />
        <Suggestion imagem="assets/img/chibirdart.svg" usuario="chibirdart" razao="Segue você" />
        <Suggestion imagem="assets/img/razoesparaacreditar.svg" usuario="razoesparaacreditar" razao="Novo no Instagram" />
        <Suggestion imagem="assets/img/adorable_animals.svg" usuario="adorable_animals" razao="Segue você" />
        <Suggestion imagem="assets/img/smallcutecats.svg" usuario="smallcutecats" razao="Segue você" />
      </div>
    );
  }