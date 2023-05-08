import {useState} from "react";

const User = () => {
  const firstName = "catanacomics";
  const [name, setName] = useState(firstName);

  const firstImage = "assets/img/catanacomics.svg";
  const [image, setImage] = useState(firstImage);

  const clickUser = () => {
    let novoNome = prompt('Digite o novo nome de usuário');
    novoNome !== undefined && novoNome !== null && novoNome !== '' ? setName(novoNome) : setName(firstName);
  };

  const clickImg = () => {
    let novaImg = prompt('Insira o link da nova imagem');
    novaImg !== undefined && novaImg !== null && novaImg !== '' ? setImage(novaImg) : setImage(firstImage);
  };
  return (
    <div className="usuario">
      <img
        data-test="profile-image"
        onClick={clickImg}
        src={image}
        alt="imagem de perfil"
      />
      <div className="texto">
        <span data-test="name">
          <strong>{name}</strong>
          <ion-icon
            data-test="edit-name"
            onClick={clickUser}
            name="pencil"
          ></ion-icon>
        </span>
      </div>
    </div>
  );
}

export default User;
