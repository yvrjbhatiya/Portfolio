import React from "react";
import aboutIMG from "../img/about.svg";

const About = () => {
  return (
    <section className="about" id="about">
      <div
        className="about-content"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
      >
        <div className="about-layout">
          <div className="about-left">
            <div className="about-title">
              <h2>About Me</h2>
            </div>
            <div className="about-subtitle">
              <p>
                Hi, I'm Yuvraj, a frontend-focused full-stack developer who
                builds clean, responsive, and user-friendly web applications
                with React.js, Tailwind CSS, Node.js, and MongoDB. I've built
                e-commerce platforms, real-time chat apps, and live data
                trackers, and I care about clean code and smooth user
                experiences. When I'm not coding, I enjoy exploring nature,
                which often inspires my design style.
              </p>
            </div>
            <div className="tech-stack">
              <p data-aos="zoom-in-right" data-aos-delay="100">
                Tech Stack
              </p>
              <div className="tech-logo">
                <ul>
                  <img
                    src="https://skillicons.dev/icons?i=html"
                    alt="HTML"
                    data-aos="zoom-in-right"
                    data-aos-delay="100"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=css"
                    alt="CSS"
                    data-aos="zoom-in-right"
                    data-aos-delay="200"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=js"
                    alt="JavaScript"
                    data-aos="zoom-in-right"
                    data-aos-delay="300"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=react"
                    alt="React.js"
                    data-aos="zoom-in-right"
                    data-aos-delay="400"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=redux"
                    alt="Redux Toolkit"
                    data-aos="zoom-in-right"
                    data-aos-delay="500"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=tailwind"
                    alt="Tailwind CSS"
                    data-aos="zoom-in-right"
                    data-aos-delay="600"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=materialui"
                    alt="Material UI"
                    data-aos="zoom-in-right"
                    data-aos-delay="700"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=bootstrap"
                    alt="Bootstrap"
                    data-aos="zoom-in-right"
                    data-aos-delay="800"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=nodejs"
                    alt="Node.js"
                    data-aos="zoom-in-right"
                    data-aos-delay="800"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=express"
                    alt="Express.js"
                    data-aos="zoom-in-right"
                    data-aos-delay="800"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=mongodb"
                    alt="MongoDB"
                    data-aos="zoom-in-right"
                    data-aos-delay="800"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=mysql"
                    alt="MySQL"
                    data-aos="zoom-in-right"
                    data-aos-delay="800"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=git"
                    alt="Git"
                    data-aos="zoom-in-right"
                    data-aos-delay="800"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=github"
                    alt="GitHub"
                    data-aos="zoom-in-right"
                    data-aos-delay="800"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=postman"
                    alt="Postman"
                    data-aos="zoom-in-right"
                    data-aos-delay="800"
                  />
                  <img
                    src="https://skillicons.dev/icons?i=vercel"
                    alt="Vercel"
                    data-aos="zoom-in-right"
                    data-aos-delay="800"
                  />
                </ul>
              </div>
            </div>
          </div>
          <div
            className="about-right"
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <img src={aboutIMG} alt="About Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
