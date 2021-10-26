import React from "react";
import "../components/css/Project.css";
import project1 from "./images/project1.jpg";
import project2 from "./images/project2.jpg";
import project3 from "./images/project3.jpg";
import project4 from "./images/project4.jpg";
import preparation from "./images/preparation.jfif";

function Project() {
  return (
    <div className="project" id="goProject">
      <div className="title">
        <h2>Project</h2>
      </div>
      <div className="content">
        <div className="card">
          <div className="card-img">
            <a
              href="https://springyong.github.io/responsive-web/"
              target="_blank"
            >
              <img src={project1} alt="" />
            </a>
            <div className="card-desc">
              <h2>BASQ</h2>
              <span>Responsive Web Design</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <a href="https://springyong.github.io/to-do-list/" target="_blank">
              <img src={project2} alt="" />
            </a>
            <div className="card-desc">
              <h2>To-do list</h2>
              <span>To-do list & Calendar</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <a href="https://springyong.github.io/movie-api/#/" target="_blank">
              <img src={project3} alt="" />
            </a>
            <div className="card-desc">
              <h2>Movie list</h2>
              <span>React movie API</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <a href="https://springyong.github.io/" target="_blank">
              <img src={project4} alt="" />
            </a>
            <div className="card-desc">
              <h2>Shopping cart</h2>
              <span>React Shopping web</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <a href="#goProject">
              <img src={preparation} alt="" />
            </a>
            <div className="card-desc">
              <h2></h2>
              <span></span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <a href="#goProject">
              <img src={preparation} alt="" />
            </a>
            <div className="card-desc">
              <h2></h2>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
