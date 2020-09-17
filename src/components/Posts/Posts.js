import React from "react";
import Post from "./Post/Post";

import s from "./Posts.module.css";

const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const WINDOW_VIEW = "https://bit.ly/3krhm6E";

function Posts() {
  return (
    <div className={s.posts}>
      <Post
        author={{
          name: "Anakin Skywalker",
          photo: ANAKIN_IMAGE,
          nickname: "@dart_vader",
        }}
        content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
        image={RAY_IMAGE}
        date={"26 февр."}
      />
      <Post
        author={{
          name: "Anakin Skywalker",
          photo: ANAKIN_IMAGE,
          nickname: "@dart_vader",
        }}
        content="Pretty walk with my son"
        image={WINDOW_VIEW}
        date={"28 янв."}
      />
    </div>
  );
}

export default Posts;
