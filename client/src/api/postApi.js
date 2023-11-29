import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const postApi = createApi({
  reducerPath: "postApi",
  tagTypes: ["blog"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kmk-blog.onrender.com/blog",
  }),
  endpoints: (builder) => ({
    createBlog: builder.mutation({
      query: (values) => {
        const token = Cookies?.get("User");
        return {
          url: "/",
          method: "POST",
          body: values,
          headers: { authorization: `Bearer ${token}` },
        };
      },
      invalidatesTags: ["blog"],
    }),
    updateBlog: builder.mutation({
      query: ({ values, bookId }) => {
        const token = Cookies.get("User");
        const { id } = JSON.parse(Cookies.get("Info"));
        return {
          url: `/${bookId}?user_id=${id}`,
          method: "PUT",
          body: values,
          headers: { authorization: `Bearer ${token}` },
        };
      },
      invalidatesTags: ["blog"],
    }),
    deleteBlog: builder.mutation({
      query: (data) => {
        const token = Cookies?.get("User");
        return {
          url: `/${data.id}?user_id=${data.userId}`,
          method: "DELETE",
          headers: { authorization: `Bearer ${token}` },
        };
      },
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
      query: (id) => ({
        url: `/${id}`,
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
