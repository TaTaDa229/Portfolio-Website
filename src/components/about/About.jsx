import React from "react";
import "./about.css";
import ME from "../../assets/me5.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 Year Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Language</h5>
              <small>English</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>9 Completed</small>
            </article>
          </div>

          <p>
            “My name is Dat Ta. I am looking forward to working in a
            professional, dynamic and challenging environment in order to
            improve knowledge and accumulate experiences. I want to make the best effort
            to complete the assigned tasks andcontribute to personal career as
            well as the development of company. .”
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
