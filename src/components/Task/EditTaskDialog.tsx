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

export default function EditTaskDialog({
  handleEditTask,
  task,
}: {
  handleEditTask: (newTaskValues: TaskType) => void;
  task: TaskType;
}) {
  const [open, setOpen] = useState(false);
  const [newTaskValues, setNewTaskValues] = useState(task);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewTaskValues({ ...newTaskValues, [name]: value });
  };

  const handleSubmit = () => {
    handleEditTask(newTaskValues);
    setOpen(false);
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

          <DialogFooter className="flex justify-end">
            <Button onClick={handleSubmit}>Edit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
