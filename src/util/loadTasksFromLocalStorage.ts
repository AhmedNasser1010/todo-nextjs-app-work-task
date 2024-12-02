import { TaskType } from "@/types/TaskType";

const loadTasksFromLocalStorage = (): TaskType[] => {
  if (typeof window !== "undefined") {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
  }
  return [];
};

export default loadTasksFromLocalStorage;