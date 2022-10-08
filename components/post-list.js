import React from "react";

import styles from "./post-list.module.scss";
import PostPreview from "./post-preview";

const PostList = ({ posts }) => {
  return (
    <div className={`${styles.wrapper}`}>
      {posts.map((post, index) => (
        <PostPreview
          key={index}
          imageUrl={post.imageUrl}
          title={post.title}
          description={post.description}
        />
      ))}
    </div>
  );
};

export default PostList;
