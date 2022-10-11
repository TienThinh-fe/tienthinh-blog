import { useTagStore, usePostStore } from "../store/store";

export function getAllTags(posts) {
  const tags = [];

  posts.forEach((post) => {
    post.frontmatter.tags.forEach((tag) => {
      if (!tags.find((t) => t.title === tag)) {
        tags.push(tag);
      }
    });
  });

  return tags;
}

export function adjustSelectedTags(tag) {
  const selectedTags = useTagStore.getState().selectedTags;

  if (selectedTags.find((t) => t === tag)) {
    selectedTags.splice(selectedTags.indexOf(tag), 1);
  } else {
    selectedTags.push(tag);
  }

  const unsub1 = useTagStore.subscribe(console.log);

  useTagStore.setState({ selectedTags: selectedTags });

  unsub1();

  useTagStore.destroy();
}

export function initializePosts() {}

export function filterPostByTag() {
  const filteredPosts = [];
  const initialPosts = usePostStore.getState().initialPosts;
  const selectedTags = useTagStore.getState().selectedTags;

  if (selectedTags.length === 0) {
    usePostStore.setState({ posts: initialPosts });
  } else {
    initialPosts.forEach((post) => {
      post.frontmatter.tags.forEach((tag) => {
        if (
          selectedTags.find((t) => t === tag) &&
          !filteredPosts.includes(post)
        ) {
          filteredPosts.push(post);
        }
      });
    });

    usePostStore.setState({ posts: filteredPosts });
  }
}
