import React from "react";

import Action from "./Action";

import verifiedIcon from "../../../assets/img/verified-logo.svg";
import arrowIcon from "../../../assets/img/arrow-logo.svg";
import commentIcon from "../../../assets/img/comment_icon.svg";
import repostIcon from "../../../assets/img/repost_icon.svg";
import likeIcon from "../../../assets/img/like_icon.svg";
import shareIcon from "../../../assets/img/share_icon.svg";

import "./Post.css";

const ACTIONS_DATA = [
  {
    type: "comment",
    img: commentIcon,
    count: 482,
  },
  {
    type: "repost",
    img: repostIcon,
    count: 146,
  },
  {
    type: "like",
    img: likeIcon,
    count: 887,
  },
  {
    type: "share",
    img: shareIcon,
    count: "",
  },
];

const actionsBlock = ACTIONS_DATA.map((el, i) => (
  <Action img={el.img} count={el.count} key={i} />
));

function Post(props) {
  return (
    <div className="post">
      <div className="user-logo-block">
        <img src={props.author.photo} alt="user_logo" />
      </div>
      <div className="post-info-block">
        <div className="text-block">
          <div className="post-info">
            <h4>{props.author.name}</h4>
            <img src={verifiedIcon} alt="verified_icon" />
            <span>{`${props.author.nickname} · ${props.date}`}</span>
            <img src={arrowIcon} alt="arrow_icon" className="arrow-icon" />
          </div>
          <div className="post-content">
            <p>{props.content}</p>
          </div>
        </div>
        <div className="content-img-block">
          <img src={props.image} alt="post_img" />
        </div>
        <div className="actions-block">{actionsBlock}</div>
      </div>
    </div>
  );
}

export default Post;
