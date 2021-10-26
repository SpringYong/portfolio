import React from "react";
import "../components/css/Profile.css";
import html from "./images/html.png";
import css from "./images/css.png";
import es6 from "./images/es6.png";
import react from "./images/react.png";
import redux from "./images/redux.png";
import node from "./images/node.png";

function Profile() {
  return (
    <div className="profile" id="goProfile">
      <div className="title">
        <h2>Profile</h2>
      </div>
      <div className="content">
        <div>
          <h2 className="content-title">웹 개발을 즐겁고 재미있게</h2>
          <p className="content-body">
            웹 개발에 관심이 생겨 프론트엔드 개발자를 목표로 하고 있습니다.
            <br />
            6개월 동안 국비과정과 강의를 듣고 javascript와 react를 이용해
            웹페이지를 만들면서 개발 실력을 키우고 있습니다.
            <br />
            개발자로써 계속해서 배우고 노력해서 성장하는 모습을
            보여드리겠습니다. 감사합니다.
          </p>
          {/* 열심히는 기본, 잘하는 개발자가 되기위해 끊임없이 노력하겠습니다. */}
          <h2 className="content-title">Skills</h2>
          <div className="content-logo">
            <img src={html} />
            <img src={css} />
            <img src={es6} />
            <img src={react} />
            <img src={redux} />
            <img src={node} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
