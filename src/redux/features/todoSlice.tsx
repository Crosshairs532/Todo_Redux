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
    toggleState: (state, actions: PayloadAction<string>) => {
      console.log({ actions });
      const task = state.todo.find((t) => t.id === actions.payload);
      task!.isCompleted = !task?.isCompleted;
      // const checked = document.getElementById(
      //   `${task?.title}`
      // ) as HTMLInputElement;

      state.todo = state.todo.sort((a, b) => {
        if (a.isCompleted && !b.isCompleted) return 1;
        if (!a.isCompleted && b.isCompleted) return -1;
        return 0;
      });
    },
  },
});

export const { addTodo, removeTodo, toggleState } = todoSlice.actions;

export default todoSlice.reducer;
