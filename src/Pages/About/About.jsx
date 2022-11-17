import React from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import Profile from "../../Assests/Profile/mypic.png"
import WindowSize from "../../Utils/WindowSize";
import styles from "./About.module.css";

const About = () => {
  const { newTheme } = React.useContext(ThemeContext);
  const [width] = WindowSize();
  const img =
    width < 650
      
      ?Profile
      : "https://miro.medium.com/max/1360/1*IRGHmiGsa16stedQvIaZfw.gif";
  return (
    <div
     id="about"
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="800"
      className={styles.container}
      style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
    >
      <div className={styles.first}>
        <img src={img} alt="" />
      </div>
      <div className={styles.second}>
        <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          About Me
        </h1>
        <div className={styles.borderBottom} />
        <p style={{ color: `${newTheme.para}` }} className={styles.aboutMe}>
          I am a Full stack web developer. I have made some projects using HTML,
          CSS, Javascript, React, Redux still learning...
          <br />
          <br />I am passionate about solving real-world problems in the field
          of web development and software engineering. Eager to be a part of a
          team which gives me ability to learn and grow . My hobbies are
          Watching movies,
          Travelling, listening music
        </p>
      </div>
    </div>
  );
};

export default About;
