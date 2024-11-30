export default function TaskInputs({
  values,
  handleSetValue,
  errors
}: {
  values: { title: string; description: string };
  handleSetValue: any;
  errors: string | null;
}) {
  return (
    <div className="flex flex-col gap-1">
      <input
        type="text"
        alt="Task Title"
        name="title"
        placeholder="Task Title"
        className="text-foreground placeholder-foreground mb-3"
        onChange={handleSetValue}
        value={values.title}
      />
      <textarea
        name="description"
        placeholder="Task Description Here"
        className={`text-foreground placeholder-foreground mb-2 ${values.title.length ? 'block' : 'hidden'}`}
        onChange={handleSetValue}
        value={values.description}
        />
        {errors && <span className="text-sm text-red-600 pb-2">{errors}</span>}
    </div>
  );
}
