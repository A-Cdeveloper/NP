import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getUsers, User } from "../../data/data";
import { RootState } from "../store";

export const fetchUsers = createAsyncThunk<User[]>(
  "users/fetchUsers",
  async () => getUsers(),
);

export interface UserState {
  userList: User[];
}

const initialState = {
  userList: [],
} as UserState;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    deleteUser: (state, { payload }) => {
      state.userList = state.userList.filter((user) => user.id !== payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.userList.push(...payload);
    });
  },
});

// TODO: Export any redux actions if needed
// export const { myAwesomeReducer } = userSlice.actions;

export default userSlice.reducer;

export const selectUsers = (state: RootState) => state.user.userList;
export const { deleteUser } = userSlice.actions;
