import React from "react";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";

import styles from "./post-content.module.scss";

const components = {
  h2: (props) => (
    <h2 style={{ fontSize: "32px", padding: "12px 0", fontWeight: "600" }}>
      {props.children}
    </h2>
  ),
  p: (props) => (
    <p style={{ fontSize: "16px", lineHeight: "1.5" }}>{props.children}</p>
  ),
  pre: (props) => (
    <pre
      style={{
        margin: "12px 0",
        borderRadius: "4px",
      }}
    >
      {props.children}
    </pre>
  ),
  img: (props) => (
    <span className={styles.blogImage}>
      <img {...props} alt={props.alt} />
    </span>
  ),
};

const PostContent = ({ mdxSource, frontmatter }) => {
  return (
    <div className={styles.wrapper}>
      <MDXRemote {...mdxSource} components={components} />
    </div>
  );
};

export default PostContent;
