import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./User";
import { userApi } from "../api/userApi";
import { postApi } from "../api/postApi";
export const store = configureStore({
  reducer: {
    user: UserSlice,
    [userApi.reducerPath]: userApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, postApi.middleware),
});
