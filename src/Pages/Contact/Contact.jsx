import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";

import styles from "./Contact.module.css";

const Contact = () => {
  const { newTheme } = useContext(ThemeContext);
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <h1 style={{ color: `${newTheme.title}` }}>Get in Touch</h1>
        <p style={{ color: `${newTheme.para}` }} className={styles.paragraph}>
          One of my favorite things about developing web applications is the
          variety of projects. So if you want to collaborate or have some work
          for me, Get in touch and tell me what you have in mind. — I can’t wait
          to hear all about it! 😇
          <br />
          Gmail:parikshitholey20@gmail.com
        </p>
        <div
          style={{ color: `${newTheme.title}` }}
          className={styles.contactOptions}
        >
           <a
            href="mailto: parikshitholey20@gmail.com"
            aria-label="email"
            target="_blank"
            rel="noreferrer"
          >
            <i className="far fa-envelope"></i>
          </a>
          <a
            href="tel:7775043120"
            aria-label="Phone"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fas fa-phone-alt" />
          </a>
         
          <a
            href="https://www.linkedin.com/in/md-zubair-229321230/"
            aria-label="Linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          
          <a
            href="https://github.com/MDZUBAIR599"
            aria-label="GitHub"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-github" />
          </a>

          {/* <a
            href="https://twitter.com/MdZubair5999"
            aria-label="Twitter"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a> */}

          <a
            href="https://codesandbox.io/dashboard/templates?workspace=7534162b-03e9-4d0f-98fc-85773758c145"
            aria-label="Codesandbox"
            target="_blank"
            rel="noreferrer"
          >
            <img
              width="44px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd_ryNhg44m5Ns26qExQWocjn_uQC2R7sfDB8O-HQ-Sj7uHb9isOwWko8G6fv8mgNoctg&usqp=CAU"
              alt="codesandbox"
            />
            <title>Codesandbox</title>
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </a>
        </div>
      </div>
      <div style={{ background: `${newTheme.line}` }} className={styles.line} />
      <div style={{ color: `${newTheme.para}` }} className={styles.copyright}>
        Designed and build by Parikshit Holey, 2022 All rights reserved.
      </div>
    </footer>
  );
};

export default Contact;
