export type TaskStatus = "TASK" | "DONE";

export type TaskType = {
  id: string;
  title: string;
  description: string;
  createdAt: number;
  updatedAt: number;
  status: TaskStatus;
  img?: string;
}