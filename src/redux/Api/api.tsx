import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001",
  }),
  endpoints: (builder) => ({
    getTodo: builder.query({
      query: () => ({
        url: "/tasks",
        method: "GET",
      }),
    }),
    addTodo: builder.mutation({
      query: (data) => ({
        url: "/tasks",
        method: "POSt",
        body: data,
      }),
    }),
  }),
});
export const { useGetTodoQuery, useAddTodoMutation } = baseApi;
