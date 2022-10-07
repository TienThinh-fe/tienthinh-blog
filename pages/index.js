import Container from "../components/container";
import Header from "../components/header";
import PostList from "../components/post-list";
import TagList from "../components/tag-list";

export default function Home() {
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
      imageUrl:
        "https://www.educative.io/v2api/editorpage/6452289848475648/image/5294398307303424",
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
    },
  ];

  return (
    <Container>
      <Header />
      <TagList tags={tags} />
      <PostList posts={posts} />
    </Container>
  );
}
