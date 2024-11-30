'use client';
import { useState } from 'react';

import TaskInputs from './TaskInputs';
import BarButtons from './BarButtons';

export default function AddTaskBar() {
  const [values, setValues] = useState({ title: '', description: '' });
  const [errors, setErrors] = useState(null);

  const handleSetValue = (e: any) => {
    const { value, name } = e.target;
    setValues((values) => ({ ...values, [name]: value }));

    if (name === 'title' && value.length === 0) {
      setValues((values) => ({ ...values, description: '' }));
    }
  };

  return (
    <div className="fixed w-[calc(100%-40px)] bg-background bottom-5 left-5 rounded-3xl p-5 border border-black shadow-[4px_7px_0px_0px]">
      <TaskInputs values={values} handleSetValue={handleSetValue} errors={errors} />
      <BarButtons values={values} setValues={setValues} setErrors={setErrors} />
    </div>
  );
}
