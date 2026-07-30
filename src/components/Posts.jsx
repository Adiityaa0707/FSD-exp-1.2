import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, deletePost } from "../features/posts/postSlice";
import {
  selectEducationPosts,
  selectTotalPosts,
} from "../features/posts/selectors";

function Posts({ postTitle, setPostTitle }) {
  const dispatch = useDispatch();

  const posts = useSelector(selectEducationPosts);
  const totalPosts = useSelector(selectTotalPosts);

  const addNewPost = () => {
    if (postTitle.trim() === "") return;
    
    dispatch(
      addPost({
        id: Date.now(),
        title: postTitle,
        content: "This post was added using Redux Toolkit.",
        category: "Education",
      })
    );
    setPostTitle("");
  };

  return (
    <>
      <button onClick={addNewPost}>Add Post</button>

      <h2>Posts</h2>

      <p><strong>Total Posts:</strong> {totalPosts}</p>

      {posts.map((post) => (
        <div className="post-card" key={post.id}>
          <h3>{post.title}</h3>

          <p>{post.content}</p>

          <p><strong>Category:</strong> {post.category}</p>

          <button
            className="delete-btn"
            onClick={() => dispatch(deletePost(post.id))}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

export default React.memo(Posts);
