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
import { Trash } from 'lucide-react';
import Button from '@/components/Button';

export default function DeleteTaskDialog({
  handleDeleteTask,
  title,
}: {
  handleDeleteTask: () => void;
  title: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <DialogTrigger setOpen={setOpen}  className='w-7 h-5 flex items-center justify-center cursor-pointer'>
        <Trash size={14} />
      </DialogTrigger>
      <Dialog open={open}>
        <DialogContent className="flex flex-col justify-between">
          <X onClick={() => setOpen(false)} className='absolute top-2 right-2 cursor-pointer w-5' />
          <DialogHeader>
            <DialogTitle>Delete Task</DialogTitle>
            <DialogDescription>Delete task from the storage</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col">
            <p>You will delete a task with title: {title}</p>
            <p>Are you sure?</p>
          </div>
          <DialogFooter className="flex justify-end">
            <Button onClick={handleDeleteTask} variant="destructive">
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
