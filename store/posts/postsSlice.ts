import { createSlice } from "@reduxjs/toolkit";
import { mockedPosts, Post } from "../../data";
import { RootState } from "../store";
import { addPost } from "./postsActions";

// SET UP STATE
type PostState = {
  list: Post[];
  isLoading: boolean;
  error?: string;
};
const initialState: PostState = {
  list: mockedPosts,
  isLoading: false,
};

// SET UP SLICE
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  // Thunks are defined in the extraReducers
  extraReducers: (builder) => {
    builder.addCase(addPost.pending, (state) => {
      state.isLoading = false;
      state.error = undefined;
    });
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.list.push(action.payload);
      state.isLoading = false;
    });
    builder.addCase(addPost.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

// EXPORT REDUCER AND ACTIONS
export const postsReducer = postSlice.reducer;
export const {} = postSlice.actions;

// SELECTORS
export const selectPostsIsLoading = (state: RootState) => state.posts.isLoading;
export const selectPosts = (state: RootState) => state.posts.list;

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
