import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { TaskType } from "@/types/TaskType";

const loadTasksFromLocalStorage = (): TaskType[] => {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
};

const saveTasksToLocalStorage = (tasks: TaskType[]) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const initialState: TaskType[] = loadTasksFromLocalStorage();

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
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
  addTask,
  toggleTask,
  deleteTask,
  updateTask
} = tasksSlice.actions;

export const tasks = (state: RootState) => state.tasks;

export default tasksSlice.reducer;
