// import from lib
import fs from "fs";
import matter from "gray-matter";
import path from "path";

// import components
import Container from "../components/container";
import Header from "../components/header";
import PostList from "../components/post-list";
import TagList from "../components/tag-list";

// import utils
import { postFileNames, postsPath } from "../utils/mdx-utils";

export default function Home({ postsProp }) {
  const tags = [
    {
      title: "All",
      isSelected: true,
    },

    {
      title: "TIL",
      isSelected: false,
    },
    {
      title: "Frontend",
      isSelected: false,
    },
    {
      title: "Backend",
      isSelected: false,
    },
  ];

  return (
    <Container>
      <Header />
      <TagList tags={tags} />
      <PostList posts={postsProp} />
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
    props: { postsProp: JSON.parse(JSON.stringify(posts)) },
  };
}
