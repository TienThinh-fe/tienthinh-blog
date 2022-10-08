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

  const posts = [
    {
      imageUrl:
        "https://www.educative.io/v2api/editorpage/6452289848475648/image/5294398307303424",
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
    },
    {
      imageUrl:
        "https://www.educative.io/v2api/editorpage/6452289848475648/image/5294398307303424",
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
    },
    {
      imageUrl: postsProp[0].frontmatter.bannerUrl,
      title: postsProp[0].frontmatter.title,
      description: postsProp[0].frontmatter.description,
    },
  ];

  console.log(postsProp);

  return (
    <Container>
      <Header />
      <TagList tags={tags} />
      <PostList posts={posts} />
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
