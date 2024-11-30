import { CircleArrowUp, ImagePlus } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/rtk/hooks';
import { tasks, addTask } from '@/rtk/slices/tasksSlice';
import { v4 as uuidv4 } from 'uuid';

interface Values {
  title: string;
  description: string;
}

export default function BarButtons({
  values,
  setValues,
  setErrors,
}: {
  values: Values;
  setValues: React.Dispatch<React.SetStateAction<Values>>;
  setErrors: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const dispatch = useAppDispatch();
  const currentTasks = useAppSelector(tasks);

  const handleSubmit = () => {
    if (values.title.length) {
      const taskExists = currentTasks.find(
        (task) => task.title === values.title
      );

      if (taskExists === undefined) {
        dispatch(
          addTask({
            id: uuidv4(),
            title: values.title,
            description: values.description,
            createdAt: Date.now(),
            updatedAt: 0,
            status: 'TASK',
          })
        );
        setValues({ title: '', description: '' });
        setErrors(null);
        return;
      }

      setErrors('This task is exist before');
    }

    return;
  };

  return (
    <div className="flex items-center justify-between">
      <ImagePlus className={`w-7 h-7 opacity-50 cursor-default`} />
      <CircleArrowUp
        className={`w-7 h-7 ${values.title.length ? 'opacity-100 cursor-pointer' : 'opacity-50 cursor-auto'}`}
        onClick={handleSubmit}
      />
    </div>
  );
}
