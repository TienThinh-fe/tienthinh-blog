import React from "react";
import { postsPath, postFileNames } from "../../utils/mdx-utils";
import path from "path";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import rehypeHighlight from "rehype-highlight";
import matter from "gray-matter";

import Container from "../../components/container";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import PostContent from "../../components/post-content";

const FirstPost = ({ mdxSource, frontmatter }) => {
  return (
    <Container>
      <Header />
      <PostHeader title={frontmatter.title} imageUrl={frontmatter.bannerUrl} />
      <PostContent mdxSource={mdxSource} frontmatter={frontmatter} />
    </Container>
  );
};

export async function getStaticProps({ params }) {
  const { slug } = params;
  const filePath = path.join(postsPath, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data: frontmatter, content } = matter(fileContent);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
    },
  });
  return {
    props: {
      mdxSource,
      frontmatter: JSON.parse(JSON.stringify(frontmatter)),
    },
  };
}

export async function getStaticPaths() {
  const postsPath = postFileNames.map((slug) => {
    return {
      params: {
        slug: slug.replace(/\.mdx?$/, ""),
      },
    };
  });

  return {
    paths: postsPath,
    fallback: false,
  };
}

export default FirstPost;
