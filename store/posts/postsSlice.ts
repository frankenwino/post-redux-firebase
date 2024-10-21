import { createSlice } from "@reduxjs/toolkit";
import { mockedPosts, Post } from "../../data";
import { RootState } from "../store";
import { addPost } from "./postsActions";

// SET UP STATE
type PostState = Post[];
const initialState: PostState = mockedPosts;

// SET UP SLICE
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

// EXPORT REDUCER AND ACTIONS
export const postsReducer = postSlice.reducer;
export const {} = postSlice.actions;

// SELECTORS
export const selectPosts = (state: RootState) => state.posts;

// SELECT * FROM post JOIN user on post.user_id=user.id
export const selectPostsWithAuthor = (state: RootState) => {
  const posts = selectPosts(state);

  return posts.map((post) => {
    return {
      ...post,
      user: state.users.list.find((user) => user.uid === post.userId),
    };
  });
};
