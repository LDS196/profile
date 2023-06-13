import React from "react";
import s from "./SocialMediaList.module.scss";
import folderImg from "../../../../assets/icons/folder.svg";
import { Link } from "react-router-dom";

const SocialMediaList = () => {

  const socialItems = [
    { title: "Telegram", link: "tg://resolve?domain=<@lds169>" },
    { title: "GitHub", link: "https://github.com/LDS196?tab=repositories" },
    { title: "Resume", link: "https://drive.google.com/file/d/1X_57QiOj16yVdPsmTGZUs-ewEObCfOfa/view?usp=sharing" }
  ];

  const socialItemsForRender = socialItems.map((el, i) => {
    return (
      <li key={i}>
      <img src={folderImg} alt="" />
      <Link to={el.link}>{el.title}</Link>
    </li>
    )
  });
  return (
    <div className={s.header__social}>
      <ul>
        {socialItemsForRender}
      </ul>
    </div>
  );
};

export default SocialMediaList;