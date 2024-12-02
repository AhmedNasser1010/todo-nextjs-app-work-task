'use client';
import { useEffect } from "react";
import {
  Task,
  TaskTitle,
  TaskDescription,
  TaskTimestamps,
  TaskActions
} from "@/components/Task/Task";
import { useAppSelector, useAppDispatch } from "@/rtk/hooks";
import { tasks, initTasks } from "@/rtk/slices/tasksSlice";
import SearchBox from "@/components/SearchBox";
import { useState } from "react";
import loadTasksFromLocalStorage from "@/util/loadTasksFromLocalStorage"

export default function Home() {
  const dispatch = useAppDispatch();
  const tasksData = useAppSelector(tasks);
  const [searchKey, setSearchKey] = useState('');

  // initial tasks load from localStorage from useEffect while localStorage is a client side
  useEffect(() => {
    dispatch(initTasks(loadTasksFromLocalStorage()))
  }, [dispatch])

  const handleSetSearchKey = (key: string) => {
    setSearchKey(key);
  };

  const filteredTasks = tasksData.filter(task => 
    task.title.toLowerCase().includes(searchKey.toLowerCase()) || 
    task.description.toLowerCase().includes(searchKey.toLowerCase())
  );

  return (
    <div>
      <SearchBox searchKey={searchKey} handleSetSearchKey={handleSetSearchKey} />
      <div className="flex flex-wrap">
        {
          filteredTasks.length > 0 && (
            filteredTasks.map(task => (
              <Task key={task.id} status={task.status}>
                <div className="flex flex-col justify-between gap-3">
                  <div className="flex flex-col">
                    <TaskTitle>{task.title}</TaskTitle>
                    <TaskDescription>{task.description}</TaskDescription>
                  </div>

                  <TaskTimestamps createdAt={task.createdAt} updatedAt={task.updatedAt} />
                </div>
                <TaskActions task={task} />
              </Task>
            ))
          )
        }
      </div>
    </div>
  );
}