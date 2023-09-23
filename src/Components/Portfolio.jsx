/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/student.jpg";

const imageAltText = "laptop image with code on screen, coffee,notebook and plant on desk";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Fellowship",
    description:
      "This is my fellowship Program where i do some coding task and learning in Tech industry",
    url: "https://github.com/laibarif/Coding-ACM-Fellowship",
  },
  {
    title: "Landing Page",
    description:
      "I create the Landing page for scrent agency",
    url: "https://github.com/laibarif/TechnoHackIntenship/commit/bc5081f2ce9a8280b30201fad57736f29e844963",
  },
  {
    title: "Personal Portofolio",
    description:
      "This is my Portfolio. I create it in html, css, javascript",
    url: "https://github.com/laibarif/TechnoHackIntenship/commit/23560c63c5a4f09ea3bfc84391671f78c12216d7",
  },
  {
    title: "Facebook Clone",
    description:
      "A social media platform that work like a facebook. People can interact with each other add post, story and chat with each other",
    url: "https://github.com/laibarif/Facebook-Clone",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
