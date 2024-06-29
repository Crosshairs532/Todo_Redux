import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001",
  }),
  tagTypes: ["todos"],
  endpoints: (builder) => ({
    getTodo: builder.query({
      query: (priority) => {
        // * this is one to use query param.
        // url: `/tasks?priority=${priority}`,
        // url: `/tasks`,
        // method: "GET",
        // * this is another to use query param.
        // params: { priority },
        // * in a professional way
        const param = new URLSearchParams();
        console.log(param);
        if (priority) {
          param.append("priority", priority);
        }
        return {
          url: `/tasks`,
          method: "GET",
          params: param,
        };
      },
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

    updateTodo: builder.mutation({
      query: ({ taskData, id }) => {
        console.log({ taskData, id });
        return {
          url: `/task/${id}`,
          method: "PUT",
          body: taskData,
        };
      },
      invalidatesTags: ["todos"],
    }),
  }),
});

export const {
  useGetTodoQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = baseApi;
