import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mockedPosts, Post, PostCreate } from "../data";
import { RootState } from "./store";

// SET UP STATE
type PostState = Post[];
const initialState: PostState = mockedPosts;

// SET UP SLICE
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<PostCreate>) => {
      state.push({
        id: Date.now().toString(),
        userId: "1",
        ...action.payload,
      });
    },
  },
});

// EXPORT REDUCER AND ACTIONS
export const postsReducer = postSlice.reducer;
export const { addPost } = postSlice.actions;

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
