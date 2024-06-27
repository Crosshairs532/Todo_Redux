import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Ttodo = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};

export type TinitialState = {
  todo: Ttodo[];
};

const initialState: TinitialState = {
  todo: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, actions: PayloadAction<Ttodo>) => {
      state.todo.push({
        ...actions.payload,
        isCompleted: false,
      });
    },
    removeTodo: (state, actions: PayloadAction<string>) => {
      state.todo = state.todo.filter((todo) => todo.id != actions.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
