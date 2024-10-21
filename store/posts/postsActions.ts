import { Post, PostCreate } from "../../data";
import { createAppAsyncThunk } from "../hooks";

export const addPost = createAppAsyncThunk<Post, PostCreate>(
  "posts/addPost",
  async (postCreate, thunkAPI) => {
    const state = thunkAPI.getState();

    if (!state.users.loggedInUser) {
      return thunkAPI.rejectWithValue("no logged in user");
    }

    return {
      id: Date.now().toString(),
      userId: state.users.loggedInUser?.uid,
      ...postCreate,
    };
  }
);
