import { useReducer } from "react";
import create from "zustand";

const useTagStore = create((set) => ({
  tags: [],
  selectedTags: [],
  setTags: (tags) => set({ tags }),
  setSelectedTags: (selectedTags) => set({ selectedTags }),
}));

const usePostStore = create((set) => ({
  posts: [],
  initialPosts: [],
  setPosts: (posts) => set({ posts }),
  setInitialPosts: (initialPosts) => set({ initialPosts }),
}));

export { useTagStore, usePostStore };
