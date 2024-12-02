import { TaskType } from "@/types/TaskType";

const saveTasksToLocalStorage = (tasks: TaskType[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
};

export default saveTasksToLocalStorage;