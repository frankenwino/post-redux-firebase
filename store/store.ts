import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./postsSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;