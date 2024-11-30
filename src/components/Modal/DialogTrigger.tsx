export default function DialogTrigger({
  children,
  className = '',
  open,
  setOpen,
}: {
  children: React.ReactNode;
  className?: string
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return <div onClick={() => setOpen(true)} className={`${open ? 'hidden' : 'block'} ${className}`}>{children}</div>;
}
