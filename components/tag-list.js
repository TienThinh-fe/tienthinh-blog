import React from "react";

import styles from "./tag-list.module.scss";
import Tag from "./tag";

const TagList = ({ tags }) => {
  return (
    <div className={`${styles.wrapper}`}>
      {tags.map((tag) => (
        <Tag key={tag.title} title={tag.title} isSelected={tag.isSelected} />
      ))}
    </div>
  );
};

export default TagList;
