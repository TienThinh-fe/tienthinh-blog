import React from "react";
import { useState } from "react";

import styles from "./tag.module.scss";

import { adjustSelectedTags, filterPostByTag } from "../utils/helper";

const Tag = ({ title }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={
        selected ? `${styles.wrapper} ${styles.selected}` : `${styles.wrapper}`
      }
      onClick={() => {
        adjustSelectedTags(title);
        filterPostByTag();
        setSelected(!selected);
      }}
    >
      <div>{title}</div>
    </div>
  );
};

export default Tag;
