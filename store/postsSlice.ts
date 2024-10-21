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
