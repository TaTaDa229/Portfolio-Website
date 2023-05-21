import React from "react";
import "./portfolio.css";
import IMG0 from "../../assets/portfolio0.png";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";
import IMG7 from "../../assets/portfolio7.png";
import IMG8 from "../../assets/portfolio8.png";
import IMG9 from "../../assets/portfolio9.png";

const data = [
  {
    id: 0,
    image: IMG0,
    title: "Socket.IO Chat",
    github: "https://github.com/TaTaDa229/MernChatApp",
    demo: "https://mern-chat-app-229.herokuapp.com/",
  },
  // {
  //   id: 1,
  //   image: IMG1,
  //   title: "Blog Website",
  //   github: "https://github.com/TaTaDa229/BlogWebsite",
  //   demo: "https://blog-website1.netlify.app/",
  //ReactJS, Boostrap, Material UI, Redux, NodeJS, MongoDB, ExpressJS, JWT...
  // },
  {
    id: 2,
    image: IMG2,
    title: "Portfolio Website",
    github: "https://github.com/TaTaDa229/Portfolio-Website",
    demo: "https://portfolio-website-dattt.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Music Player",
    github: "https://github.com/TaTaDa229/MusicPlayer",
    demo: "https://tatada229.github.io/MusicPlayer",
  },
  {
    id: 4,
    image: IMG4,
    title: "Calculator",
    github: "https://github.com/TaTaDa229/CalculatorJS",
    demo: "https://tatada229.github.io/CalculatorJS/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Quiz App",
    github: "https://github.com/TaTaDa229/QuizAppJS",
    demo: "https://tatada229.github.io/QuizAppJS/",
  },
  {
    id: 6,
    image: IMG6,
    title: "To Do List",
    github: "https://github.com/TaTaDa229/TodolistJS",
    demo: "https://tatada229.github.io/TodolistJS/",
  },
  {
    id: 7,
    image: IMG7,
    title: "Weather App",
    github: "https://github.com/TaTaDa229/Weather_app_JS",
    demo: "https://tatada229.github.io/Weather_app_JS/",
  },
  {
    id: 8,
    image: IMG8,
    title: "Web The Band",
    github: "https://github.com/TaTaDa229/WebTheBand",
    demo: "https://tatada229.github.io/WebTheBand/",
  },
  {
    id: 9,
    image: IMG9,
    title: "Shopee",
    github: "https://github.com/TaTaDa229/ShopeeWeb",
    demo: "https://tatada229.github.io/ShopeeWeb/",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
