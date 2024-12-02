export default function DialogTrigger({
  children,
  className = '',
  setOpen,
}: {
  children: React.ReactNode;
  className?: string
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return <div onClick={() => setOpen(true)} className={`${className}`}>{children}</div>;
}
