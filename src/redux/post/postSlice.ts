import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { BlogPost, getMembers } from "../../data/data";
import { RootState } from "../store";

export const fetchPosts = createAsyncThunk<BlogPost[]>(
  "blogPosts/fetchPosts",
  async () => getMembers(),
);

export interface PostState {
  postsList: BlogPost[];
}

const initialState = {
  postsList: [],
} as PostState;

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    editPost: (state, { payload }) => {
      const { id, title, body } = payload;
      const elementEditIndex = state.postsList.findIndex(
        (post) => post.id !== id,
      );
      state.postsList[elementEditIndex].title = title;
      state.postsList[elementEditIndex].body = body;

    },
    deletePost: (state, { payload }) => {
      state.postsList = state.postsList.filter((post) => post.id !== payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchPosts.fulfilled, (state, { payload }) => {
      state.postsList.push(...payload);
    });
  },
});

// TODO: Export any redux actions if needed
// export const { myAwesomeReducer } = userSlice.actions;

export default postSlice.reducer;

export const selectPosts = (state: RootState) => state.post.postsList;
export const { deletePost, editPost } = postSlice.actions;
