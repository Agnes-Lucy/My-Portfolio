import React from "react";
import image from "../assets/Agnes.jpg";
import "../Portfolio.css";

const About = () => {
  return (
    <div className="About" >
      <div className="About-details">
      <div >
        <header>
          <h1>Hi! I'm Agnes Udoh</h1>
        </header>
        <section>
          <p>
            I reside in Lagos, Nigeria. <br />
            I'm currently a student at Stutern learning frontend development.
            <br />
            I build website using react and libraries. <br />
            I'm proficient in HtML, CSS, JavaScript and React. <br />
            My first project in collaboration with five frontend team members
            was on a<a href="https://cash2go.netlify.app/"> loan app.</a>
          </p>
        </section>

        <section>
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Git</li>
            <li>Formik</li>
          </ul>
          <button> <a href="">Download Resume</a></button>
        </section>

        <section>
          <h2>Facts about me</h2>
          <ul>
            <li>I studied Botany as my first degree</li>
            <li>I sew and draw fashion illustration</li>
            <li>Music keeps me going</li>
            <li>I can stay awake debugging code </li>
            <li>
              I love teaching and hope to mentor teenagers in frontend
              developmement soon
            </li>
          </ul>
        </section>
      </div>
      <div><img src={image} alt="Myself" id="Profile-pix" /></div>
      </div>
    </div>
  );
};

export default About;
