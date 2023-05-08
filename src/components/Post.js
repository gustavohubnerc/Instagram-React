import { useState } from "react";

const Post = (props) => {
    const [isSaved, setIsSaved] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [numLikes, setNumLikes] = useState(props.numLikes);

    const clickLike = () => {
      setIsLiked(!isLiked);
      setNumLikes((numberOfLikes) => (isLiked ? numberOfLikes -1 : numberOfLikes + 1)); 
    };

    const clickImage = () => {
      setIsLiked(true);
      setNumLikes((numberOfLikes) => numberOfLikes + 1);
    }

    return (
      <div data-test="post" className="post">
        <div className="topo">
          <div className="usuario">
            <img src={props.userImage} alt={props.userTitle} />
            {props.userTitle}
          </div>
          <div className="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>
        <div className="conteudo">
          <img 
          data-test="post-image" 
          onDoubleClick={clickImage}
          src={props.postImage} 
          alt={props.postText} />
        </div>
        <div className="fundo">
          <div className="acoes">
            <div>
              <ion-icon data-test="like-post">
                onClick{clickLike}
                class = {isLiked ? "red" : "black"}
                name = {isLiked ? "heart" : "heart-outline"}
              </ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon data-test="save-post">
                onClick{() => setIsSaved(!isSaved)}
                name = {isSaved ? "bookmark" : "bookmark-outline"}
              </ion-icon>
            </div>
          </div>
          <div className="curtidas">
            <img src={props.likeImage} alt={props.likeTitle} />
            <div className="texto" data-test="likes-number">
              Curtido por <strong>{props.likeTitle}</strong> e {" "}
              <strong> outras {numLikes} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Post;  