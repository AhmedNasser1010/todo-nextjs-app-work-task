import { SquareCheck } from "lucide-react";
import { useAppDispatch } from '@/rtk/hooks';
import { deleteTask, toggleTask } from '@/rtk/slices/tasksSlice';
import { TaskType } from '@/types/TaskType';

import DeleteTaskDialog from './DeleteTaskDialog'
import EditTaskDialog from './EditTaskDialog'

export default function TaskActions({ task }: { task: TaskType }) {
  const iconSize = 14
  const dispatch = useAppDispatch()

  const handleDeleteTask = () => {
    dispatch(deleteTask(task.id))
  }

  const handleToggleTask = () => {
    dispatch(toggleTask(task.id))
  }

  return (
    <div className="flex">
      <DeleteTaskDialog handleDeleteTask={handleDeleteTask} title={task.title} />
      <EditTaskDialog task={task} />
      <div className="w-7 h-5 flex items-center justify-center cursor-pointer">
        <SquareCheck size={iconSize} onClick={handleToggleTask} />
      </div>
    </div>
  )
}