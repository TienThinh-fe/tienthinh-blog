import React from "react";

import styles from "./post-list.module.scss";
import PostPreview from "./post-preview";

const PostList = ({ posts }) => {
  return (
    <div className={`${styles.wrapper}`}>
      {posts.map((post, index) => (
        <PostPreview
          key={index}
          imageUrl={post.frontmatter.bannerUrl}
          title={post.frontmatter.title}
          description={post.frontmatter.description}
        />
      ))}
    </div>
  );
};

export default PostList;
