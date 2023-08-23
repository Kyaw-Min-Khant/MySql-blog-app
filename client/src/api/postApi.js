import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  tagTypes: ["blog"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4200/v1/auth",
  }),
  endpoints: (builder) => ({
    createBlog: builder.mutation({
      query: (data) => ({
        url: "/",
        method: "POST",
        body: data,
        headers: { authorization: `Bearer ${"alrie348"}` },
      }),
      invalidatesTags: ["blog"],
    }),
    updateBlog: builder.mutation({
      query: (data) => ({
        url: "/:id",
        method: "PUT",
        body: data,
        headers: { authorization: `Bearer ${"alrie348"}` },
      }),
      invalidatesTags: ["blog"],
    }),
    deleteBlog: builder.mutation({
      query: () => ({
        url: "/:id",
        method: "DELETE",
        headers: { authorization: `Bearer ${"alrie348"}` },
      }),
      invalidatesTags: ["blog"],
    }),
    getBlog: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["blog"],
    }),
    getSingleBlog: builder.query({
      query: () => ({
        url: "/:id",
        method: "GET",
      }),
      providesTags: ["blog"],
    }),
  }),
});
export const {
  useCreateBlogMutation,
  useDeleteBlogMutation,
  useUpdateBlogMutation,
  useGetBlogQuery,
  useGetSingleBlogQuery,
} = postApi;
