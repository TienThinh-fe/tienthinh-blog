// import from lib
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { useEffect } from "react";

// import components
import Container from "../components/container";
import Header from "../components/header";
import PostList from "../components/post-list";
import TagList from "../components/tag-list";

// import utils
import { postFileNames, postsPath } from "../utils/mdx-utils";
import { getAllTags } from "../utils/helper";

// import store
import { useTagStore, usePostStore } from "../store/store";

export default function Home({ posts }) {
  useEffect(() => {
    usePostStore.setState({ posts: posts });
    usePostStore.setState({ initialPosts: posts });
    useTagStore.setState({ tags: getAllTags(posts) });
  }, []);

  return (
    <Container>
      <Header />
      <TagList tags={useTagStore((state) => state.tags)} />
      <PostList posts={usePostStore((state) => state.posts)} />
    </Container>
  );
}

export async function getStaticProps() {
  const posts = postFileNames.map((slug) => {
    const content = fs.readFileSync(path.join(postsPath, `${slug}`));
    const { data } = matter(content);
    return {
      frontmatter: data,
      slug: slug.replace(/\.mdx?$/, ""),
    };
  });
  return {
    props: { posts: JSON.parse(JSON.stringify(posts)) },
  };
}
