import { configureStore, createSlice } from "@reduxjs/toolkit";
const tasks = [
  {
    id: "1",
    title: "title1",
    description: "discription1",
    isDone: true,
  },
  {
    id: "2",
    title: "title1",
    description: "discription1",
  },
];
const taskk = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];
const todoSlice = createSlice({
  name: "todos",
  initialState: tasks,
  reducers: {
    addtodo: (state, action) => {
      localStorage.setItem("tasks", JSON.stringify([...state, action.payload]));
      return (state = [...state, action.payload]);
    },
    deletetodo: (state, action) => {
      return (state = state.filter((task) => task.id !== action.payload));
    },
    updatetodo: (state, action) => {
      state = state.map((task) => {
        if (task.id === action.payload) {
          return { ...task, isDone: !task.isDone };
        }
        return task;
      });
      return state;
    },
  },
});
export const { addtodo, deletetodo, updatetodo } = todoSlice.actions;
export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});
