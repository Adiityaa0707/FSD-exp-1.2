import { createSelector } from "reselect";

const selectPosts = (state) => state.posts.posts;

export const selectEducationPosts = createSelector(
  [selectPosts],
  (posts) => posts.filter((post) => post.category === "Education")
);

export const selectTotalPosts = createSelector(
  [selectPosts],
  (posts) => posts.length
);
