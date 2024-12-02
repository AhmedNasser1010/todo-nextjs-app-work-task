import TaskTitle from '@/components/Task/TaskTitle';
import TaskDescription from '@/components/Task/TaskDescription';
import TaskTimestamps from '@/components/Task/TaskTimestamps';
import TaskActions from '@/components/Task/TaskActions';
import { TaskStatus } from '@/types/TaskType';

function Task({ children, status }: { children: React.ReactNode; status: TaskStatus }) {
  return (
    <div
      className={`relative bg-jade-300 w-full md:w-1/2 lg:w-1/3 my-3 mx-5 py-3 px-5 rounded-3xl relative overflow-hidden flex items-end justify-between border border-black`}
      style={{ boxShadow: 'inset 10px -5px 0px 0px' }}
    >
      <span className={`pointer-events-none absolute top-0 left-0 w-full h-full bg-jade-300 ${status === 'TASK' ? 'opacity-0' : 'opacity-50'}`}></span>
      {children}
    </div>
  );
}

export { Task, TaskTitle, TaskDescription, TaskTimestamps, TaskActions };