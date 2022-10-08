import React from "react";
import Image from "next/image";

import styles from "./post-header.module.scss";

const PostHeader = ({ title, imageUrl }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <p>{title}</p>
      </div>
      <div className={styles.coverImage}>
        <Image src={imageUrl} alt="Cover Image" width={1200} height={600} />
      </div>
    </div>
  );
};

export default PostHeader;
