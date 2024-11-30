import ActionIcon from './ActionIcon'
import { Trash, Pencil, SquareCheck } from "lucide-react";
import { useAppDispatch } from '@/rtk/hooks';
import { deleteTask, toggleTask, updateTask } from '@/rtk/slices/tasksSlice';
import { TaskType } from '@/types/TaskType';

import DeleteTaskDialog from './DeleteTaskDialog'
import EditTaskDialog from './EditTaskDialog'

export default function TaskActions({ task }: { task: TaskType }) {
  const iconSize = 14
  const dispatch = useAppDispatch()

  const handleDeleteTask = () => {
    dispatch(deleteTask(task.id))
  }

  const handleEditTask = (newValues: TaskType) => {
    dispatch(updateTask({
      ...newValues,
      id: task.id,
      title: newValues.title,
      description: newValues.description,
      updatedAt: Date.now()
    }))
  }

  const handleToggleTask = () => {
    dispatch(toggleTask(task.id))
  }

  return (
    <div className="flex">
      <DeleteTaskDialog handleDeleteTask={handleDeleteTask} title={task.title} />
      <EditTaskDialog handleEditTask={handleEditTask} task={task} />

      <ActionIcon><SquareCheck size={iconSize} onClick={handleToggleTask} /></ActionIcon>
    </div>
  )
}