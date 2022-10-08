import React from "react";

import styles from "./about-me.module.scss";

const AboutMe = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
        <img src="/avatar.png" alt="avatar" />
      </div>
      <div className={styles.description}>
        <p className={styles.name}>About Me | Tien Thinh</p>
        <p className={styles.introduction}>
          Just a simple guy with love of sharing about what I learned and what I
          know. I'm talking about web development, programming, and technology
          in general.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
