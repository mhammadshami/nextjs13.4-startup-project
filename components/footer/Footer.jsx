import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            esse expedita non aliquid illum perspiciatis. Obcaecati impedit
            necessitatibus, dolorum doloribus quibusdam provident ipsa facere,
            numquam totam aspernatur corporis a et?
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>+ 123 444 444</span>
          <span>Youtube: Test Dev</span>
          <span>Github: Test Dev@github.com</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: Europe</span>
          <span>Country: Bulgaria</span>
          <span>Current location: Bulgaria</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
