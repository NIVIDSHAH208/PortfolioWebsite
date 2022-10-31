import React from "react";
import "./about.css";
import NivImg from "../../assets/nividabout.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={NivImg} alt="About Nivid" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Trained</h5>
              <small>250+ Students</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>

            
          </div>
          <p>
              Computer Science post-graduate student with a bachelor’s degree in
              engineering, actively looking for full-time opportunity as a Full
              Stack Software Developer. Extremely efficient in Java, JavaScript,
              and SQL with sound knowledge of data-structures, algorithms, and
              object-oriented programming. Always eager to solve problems with a
              great passion to learn & work with the newest tech stacks.
            </p>

            <a href="#contact" className="btn btn-primary">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default about;
