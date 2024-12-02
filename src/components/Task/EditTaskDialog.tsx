import { X } from 'lucide-react';
import { useState } from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/Modal/Dialog';
import { Pencil } from 'lucide-react';
import Button from '@/components/Button';
import { TaskType } from '@/types/TaskType';
import { useAppDispatch, useAppSelector } from '@/rtk/hooks';
import { updateTask, tasks } from '@/rtk/slices/tasksSlice';

export default function EditTaskDialog({
  task,
}: {
  task: TaskType;
}) {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const storedTasks = useAppSelector(tasks);
  const [newTaskValues, setNewTaskValues] = useState(task);
  const [errorMsg, setErrorMsg] = useState('');

  const handleEditTask = () => {
    const currentTaskJSON = JSON.stringify({
      title: task.title,
      description: task.description,
    });
    const newTaskJSON = JSON.stringify({
      title: newTaskValues.title,
      description: newTaskValues.description,
    });

    // Check if not equal to current task
    if (currentTaskJSON !== newTaskJSON) {
      // Check if not equal to exist task
      for (const task of storedTasks) {
        if (newTaskValues.title === task.title) {
          setErrorMsg('This task title is already exist!');
          return;
        }
      }

      // Submit
      dispatch(
        updateTask({
          ...task,
          title: newTaskValues.title,
          description: newTaskValues.description,
          updatedAt: Date.now(),
        })
      );

      setErrorMsg('');
      setOpen(false);
      return;
    }

    setErrorMsg('There is no changes to edit!');
    return;
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewTaskValues({ ...newTaskValues, [name]: value });
  };

  return (
    <>
      <DialogTrigger
        open={open}
        setOpen={setOpen}
        className="w-7 h-5 flex items-center justify-center cursor-pointer"
      >
        <Pencil size={14} />
      </DialogTrigger>
      <Dialog open={open}>
        <DialogContent className="flex flex-col justify-between">
          <X
            onClick={() => setOpen(false)}
            className="absolute top-2 right-2 cursor-pointer w-5"
          />
          <DialogHeader>
            <DialogTitle>Edit Task</DialogTitle>
            <DialogDescription>Edit task from the storage</DialogDescription>
          </DialogHeader>

          <input
            type="text"
            name="title"
            placeholder="Task Title"
            value={newTaskValues.title}
            onChange={handleInputChange}
            className="border border-black border-solid rounded-xl p-3"
          />
          <input
            type="text"
            name="description"
            placeholder="Task Description"
            value={newTaskValues.description}
            onChange={handleInputChange}
            className="border border-black border-solid rounded-xl p-3"
          />
          { errorMsg && <span className='text-sm text-red-600 pt-2'>{errorMsg}</span> }

          <DialogFooter className="flex justify-end">
            <Button onClick={handleEditTask}>Edit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
