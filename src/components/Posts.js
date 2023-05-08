import Post from './Post.js'

const Posts = () => {
  let posts = [
    {
      userImage: "assets/img/meowed.svg",
      userTitle: "meowed",
      postImage: "assets/img/gato-telefone.svg",
      postText: "gato-telefone",
      likeImage: "assets/img/respondeai.svg",
      likeTitle: "respondeai",
      likeText: "outras pessoas",
      numLikes: 17000,
    },
    {
      userImage: "assets/img/barked.svg",
      userTitle: "barked",
      postImage: "assets/img/dog.svg",
      postText: "dog",
      likeImage: "assets/img/adorable_animals.svg",
      likeTitle: "adorable_animals",
      likeText: "outras pessoas",
      numLikes: 35041,
    },
    {
      userImage: "assets/img/barked.svg",
      userTitle: "barked",
      postImage: "assets/img/gato-telefone.svg",
      postText: "Lala",
      likeImage: "assets/img/adorable_animals.svg",
      likeTitle: "Neymar jr",
      likeText: "outras pessoas",
      numLikes: 52951,
    },
  ];
    return (
      <div className="posts">
        {posts.map((p) => (
          <Post
            userImage = {p.userImage}
            userTitle = {p.userTitle}
            postImage = {p.postImage}
            postText = {p.postText}
            likeImage = {p.likeImage}
            likeTitle = {p.likeTitle}
            likeText = {`outras ${String(p.numLikes)} pessoas`}
            numLikes = {p.numLikes}
          />
        ))}
      </div>
    );
}

export default Posts;