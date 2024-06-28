import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001/",
  }),
  endpoints: (builder) => ({
    getTodo: builder.query({
      query: () => ({
        url: "/tasks",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetTodoQuery } = baseApi;
