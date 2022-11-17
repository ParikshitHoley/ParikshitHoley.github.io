import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";

import Typewriter from "typewriter-effect";
import Profile from "../../Assests/Profile/mypic.png";

import AOS from "aos";
import "aos/dist/aos.css";

import WindowSize from "../../Utils/WindowSize";

import TechStacks from "../TechStacks/TechStacks";
import About from "../About/About";
import Contact from "../Contact/Contact";

import SideIcons from "../SideIcons/SideIcons";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import Card from "../../Components/Card/Card";
import { projects } from "../Projects/Projects";
import { Button } from "../../Components/Button/Button";
import resume from "../../Assests/Resume/Parikshit-Holey-Resume.pdf";
import { Link } from "react-scroll";

const Home = ({ scrollRef }) => {
  const [width] = WindowSize();
  console.log(width, "width");
  const [projectArray, setProjectArray] = useState(projects);
  const { newTheme } = React.useContext(ThemeContext);
  useEffect(() => {
    AOS.init();
  });

  useEffect(() => {
    document.body.style.backgroundColor = newTheme.background;
  }, [newTheme]);

  const handleButton = () => {};

  return (
    <div ref={scrollRef}>
      <div border="1px solid red">
        <SideIcons />
      </div>
      <div
        id="top"
        className={styles.profile}
        style={{ backgroundColor: `${newTheme.imgBackground}` }}
      >
        {width > 650 ? (
          <img
            className={styles.profileImage}
            src={Profile}
            alt="Profile pic"
          />
        ) : (
          ""
        )}
        <div
          id="home"
          data-aos="fade-zoom-out"
          className={styles.intro}
          style={{ color: `${newTheme.para}` }}
        >
          <h1>
            <span>Hi, My name is</span>
            <div className={styles.name} style={{ color: `${newTheme.title}` }}>
              Parikshit Holey
            </div>
          </h1>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "I am a Full Stack Developer.",
                  "I build things on Internet.",
                ],
                autoStart: true,
                loop: true,
                delay: "natural",
                deleteSpeed: 25,
                pauseFor: 1000,
              }}
            />
          </h1>
          <div className={styles.btn}>
            <a href={resume} download={"Parikshit-Holey-Resume"}>
              {/* resume section*/}
              <Button
                text={
                  <span className={styles.resumeBtn}>
                    <span>Download my Resume 😇 </span>{" "}
                    <i class="fas fa-download"></i>
                  </span>
                }
                handleButton={handleButton}
              />
              {width <= 650 ? (
                <div>
                  <Link to="contact">
                    <h2>Contact me</h2>
                  </Link>
                </div>
              ) : (
                ""
              )}
            </a>
          </div>
          <h2 style={{ marginTop: "60px" }}>
            Programming is an art where mind paints the logic on the
            Computer.... -Donald Knuth
          </h2>
        </div>
      </div>

      <div
        id="about"
        style={{
          background: `${newTheme.highlightBackground}`,
        }}
        className={styles.tagline}
      >
        <About />
      </div>

      <div className={styles.techStacks}>
        <TechStacks />
      </div>

      <div
        id="experience"
        className={styles.tagline}
        style={{
          background: `${newTheme.highlightBackground}`,
        }}
      >
        <div
          data-aos="fade-right"
          data-aos-offset="150"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
          style={{ color: `${newTheme.para}` }}
        ></div>
      </div>

      {/* project section from here => */}
      <div id="projects" className={styles.projects}>
        <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          Projects
        </h1>
        <div className={styles.borderBottom} />
        <div>
          {projectArray.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>

      <div
        style={{
          background: `${newTheme.highlightBackground}`,
        }}
      >
        <Contact />
      </div>
    </div>
  );
};

export default Home;
