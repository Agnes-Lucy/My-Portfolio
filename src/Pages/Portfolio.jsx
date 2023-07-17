import React from "react";
import StarWars from "../assets/maxresdefault3.jpg";
import Netflix from "../assets/Netflix.webp";
import Capture from "../assets/Filter.jpg";
import Cash2go from "../assets/Cash2go.jpg";
import Monitor from "../assets/emptymonitor.jpg";
import Television from "../assets/Television.png";

const Portfolio = () => {
  return (
    <>
      <div className="Portfolio">
        <header className="Portfolio-header">
          <h2>Recent Projects</h2>
          <p>Here are some of my past projects</p>
        </header>
        <main className="Portfolio-section1">
        <section >
          <div className="card">
            <div>
              <img src={Monitor} alt="Monitor" className="monitor" />
              <img src={Cash2go} alt="Cash2go App" className="cash2go-app" />
            </div>
            <div>
              <h2>Cash2go App</h2>
              <p>
                Cash2go app was build using
                <ul>
                  <li>Visual Studio Code</li>
                  <li>React</li>
                  <li>React-router</li>
                  <li>Formik and Yup</li>
                  <li>Chartjs</li>
                  <li>Github</li>
                </ul>
              </p>
              <button>
                <a href="https://cash2go.netlify.app/" target="_blank">
                  {" "}
                  View project
                </a>
              </button>
            </div>
          </div>
        </section>

        <section className="Portfolio-section2">
          <div className="card">
            <div>
              <img
                src={Television}
                alt="Television frame"
                className="Television"
              />
              <img src={StarWars} alt="Starwars" className="starwars" />
            </div>

            <div>
              <h2>Starwars landing page was build using</h2>
              <ul>
                <li>Visual Studio code</li>
                <li>React</li>
                <li>Axios</li>
                <li>JSX</li>
                <li>CSS</li>
                <li>Github</li>
              </ul>
              <button>
                <a
                  href="https://jovial-bonbon-91633d.netlify.app/"
                  target="_blank"
                >
                  View project
                </a>
              </button>
            </div>
          </div>
        </section>
        <section className="Portfolio-section3">
          <div className="card">
            <div>
                <img src={Netflix} alt="Netflix" className="movies" />
            </div>
           
            <div>
              <h2>Netflix landing page</h2>
              <p>This page was build with</p>
              <ul>
                <li>Visual Studio Code</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
              <button>
                <a
                  href="https://sprightly-custard-33aca7.netlify.app/"
                  target="_blank"
                >
                  View project
                </a>
              </button>
            </div>
          </div>
        </section>

        <section className="Portfolio-section4">
          <div className="card">
            <div>
              <img src={Monitor} alt="Monitor" className="monitor" />
              <img src={Capture} alt="Filtering App" className="Filtering-app" />
            </div>
            <div>
              <h2>Filtering Page</h2>
              <p>This filtering page was built using</p>
              <ul>
                <li>Visual Studio Code</li>
                <li>React</li>
                <li>JSX</li>
                <li>Axios</li>
                <li>CSS</li>
                <li>Github</li>
              </ul>
              <button>
                <a
                href="https://jovial-hotteok-608999.netlify.app/"
                target="_blank">
                View project
              </a>
              </button>
            </div>
          </div>
        </section>
        </main>
      </div>
    </>
  );
};

export default Portfolio;
