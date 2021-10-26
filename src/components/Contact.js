import React from "react";
import "../components/css/Contact.css";

function Contact() {
  return (
    <section className="contact" id="goContact">
      <div className="title">
        <h2>Contact</h2>
      </div>
      <div className="title2">
        <h2>궁금하신 사항은 아래 연럭처로 연락 바랍니다.</h2>
      </div>
      <div className="content">
        <div className="box">
          <i className="fas fa-phone icon"></i>
          <h3>연락처</h3>
          <span>010-6638-7732</span>
        </div>
        <div className="box">
          <i class="fas fa-envelope icon"></i>
          <h3>이메일</h3>
          <span>trta77@naver.com</span>
        </div>
        <div className="box">
          <a href="https://github.com/SpringYong" target="_blank">
            <i class="fab fa-github icon"></i>
            <h3>깃허브</h3>
            <span>https://github.com/SpringYong</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
