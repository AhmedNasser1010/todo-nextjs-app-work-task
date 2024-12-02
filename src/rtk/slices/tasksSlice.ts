import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { TaskType } from "@/types/TaskType";
import saveTasksToLocalStorage from "@/util/saveTasksToLocalStorage";

const initialState: TaskType[] = [];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    initTasks(state, { payload }: PayloadAction<TaskType[]>) {
      saveTasksToLocalStorage(payload);
      return payload
    },
    addTask(state, { payload }: PayloadAction<TaskType>) {
      const updatedState: TaskType[] = [...state, payload];
      saveTasksToLocalStorage(updatedState);
      return updatedState
    },
    toggleTask(state, { payload }: PayloadAction<string>) {
      const updatedState: TaskType[] = state.map(task => {
        if (task.id === payload) {
          return { ...task, status: task.status === "TASK" ? "DONE" : "TASK" };
        }
        return task;
      });
      saveTasksToLocalStorage(updatedState);
      return updatedState
    },
    deleteTask(state, { payload }: PayloadAction<string>) {
      const updatedState: TaskType[] = state.filter(task => task.id !== payload);
      saveTasksToLocalStorage(updatedState);
      return updatedState
    },
    updateTask(state, { payload }: PayloadAction<TaskType>) {
      const updatedState: TaskType[] = state.map(task => {
        if (task.id === payload.id) {
          return { ...task, ...payload };
        }
        return task;
      });
      saveTasksToLocalStorage(updatedState);
      return updatedState
    },
  },
});

export const {
  initTasks,
  addTask,
  toggleTask,
  deleteTask,
  updateTask
} = tasksSlice.actions;

export const tasks = (state: RootState) => state.tasks;

export default tasksSlice.reducer;
