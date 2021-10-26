import React, { useState } from "react";
import "../components/css/Header.css";

function Header() {
  const [menu, setMenu] = useState(true);

  const clickBtn = () => {
    setMenu(!menu);
  };

  const clickMenu = () => {
    setMenu(true);
  };

  window.addEventListener("scroll", function () {
    const header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 640);
  });

  return (
    <header>
      <a href="#" className="brand">
        SpringYong
      </a>

      <div
        className={menu ? "menu-btn" : "menu-btn active"}
        onClick={clickBtn}
      ></div>
      <div className={menu ? "navigation" : "navigation active"}>
        <a href="#" onClick={clickMenu}>
          Home
        </a>
        <a href="#goProfile" onClick={clickMenu}>
          Profile
        </a>
        <a href="#goProject" onClick={clickMenu}>
          Project
        </a>
        <a href="#goContact" onClick={clickMenu}>
          Contact
        </a>
      </div>
    </header>
  );
}

export default Header;
