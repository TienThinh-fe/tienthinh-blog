import React from "react";

import styles from "./tag.module.scss";

const Tag = ({ isSelected, title }) => {
  return (
    <div
      className={
        isSelected
          ? `${styles.wrapper} ${styles.selected}`
          : `${styles.wrapper}`
      }
    >
      <div>{title}</div>
    </div>
  );
};

export default Tag;
