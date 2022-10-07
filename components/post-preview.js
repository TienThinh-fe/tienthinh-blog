import React from "react";
import Link from "next/link";

import styles from "./post-preview.module.scss";

const PostPreview = ({ imageUrl, title, description }) => {
  return (
    <Link href="/">
      <div className={styles.wrapper}>
        <div className={styles.thumbnail}>
          <img src={imageUrl} alt={title} />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
    </Link>
  );
};

export default PostPreview;
