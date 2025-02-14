// Reducers
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "demo", task: "demo-task", isDone: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // state, action
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };
      state.todos.push(newTodo);
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    markAsDone: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isDone = true; // Mark the task as done
      }
    },
  },
});

export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;
export default todoSlice.reducer;
