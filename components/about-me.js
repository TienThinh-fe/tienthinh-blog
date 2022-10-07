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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
