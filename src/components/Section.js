import React from "react";
import { Route } from "react-router";
import Contact from "./Contact";
import Home from "./Home";
import Profile from "./Profile";
import Project from "./Project";
import "../components/css/Section.css";

function Section() {
  return (
    <section>
      <Home />
      <Profile />
      <Project />
      <Contact />
    </section>
  );
}

export default Section;
