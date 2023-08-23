import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["auth"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4202/auth",
  }),
  endpoints: (builder) => ({
    Login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    Register: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    Logout: builder.mutation({
      query: (token) => ({
        url: "/logout",
        method: "POST",
        headers: { authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});
export const { useLoginMutation, useRegisterMutation, useLogoutMutation } =
  userApi;
