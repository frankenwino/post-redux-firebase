import { createSlice } from "@reduxjs/toolkit";
import { User, mockedUsers } from "../data";

// INITIAL STATE
export type UsersState = {
  list: User[];
  loggedInUser?: User;
};

const initialState: UsersState = {
  list: mockedUsers,
  loggedInUser: mockedUsers[0],
};

// SLICE
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

// EXPORT REDUCER & ACTION
export const usersReducer = userSlice.reducer;
export const {} = userSlice.actions;
