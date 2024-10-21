import { createSlice } from "@reduxjs/toolkit";
import { mockedPosts, Post } from "../data";
import { RootState } from "./store";

// SET UP STATE
type PostState = Post[];
const initialState: PostState = mockedPosts;

// SET UP SLICE
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

// EXPORT REDUCER AND ACTIONS
export const postsReducer = postSlice.reducer;
export const {} = postSlice.actions;

// SELECTORS
export const selectPosts = (state: RootState) => state.posts;
