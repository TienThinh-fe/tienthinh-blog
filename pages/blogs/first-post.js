import React from "react";
import { postsPath } from "../../utils/mdx-utils";
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
      <PostHeader
        title="Learn How to Pre-render Pages Using Static Generation with Next.js"
        imageUrl="https://next-blog-wordpress.vercel.app/_next/image?url=https%3A%2F%2Fvercelsolutions.com%2Fwp-content%2Fuploads%2F2022%2F06%2Fhamman-mohamed-C69xTC5q_pE-unsplash-scaled.jpg&w=2048&q=75"
      />
      <PostContent mdxSource={mdxSource} frontmatter={frontmatter} />
    </Container>
  );
};

export async function getStaticProps() {
  // const { slug } = params;
  const filePath = path.join(postsPath, `first-post.mdx`);
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

export default FirstPost;
