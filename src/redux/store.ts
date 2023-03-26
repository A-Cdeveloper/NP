import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";

import postReducer from "./post/postSlice";
import userReducer from "./user/userSlice";

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
  // TODO: Add more reducers here if needed
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
