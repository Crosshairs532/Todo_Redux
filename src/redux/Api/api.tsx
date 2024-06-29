import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001",
  }),
  tagTypes: ["todos"],
  endpoints: (builder) => ({
    getTodo: builder.query({
      query: (priority) => ({
        url: `/tasks?priority=${priority}`,
        method: "GET",
      }),
      providesTags: ["todos"],
    }),
    addTodo: builder.mutation({
      query: (data) => ({
        url: "/task",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todos"],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/task/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todos"],
    }),
  }),
});

export const { useGetTodoQuery, useAddTodoMutation, useDeleteTodoMutation } =
  baseApi;
