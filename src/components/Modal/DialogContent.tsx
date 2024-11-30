export default function DialogContent({ children, className = '' }: { children: React.ReactNode; className?: string; }) {
  return (
    <div className={`bg-background absolute p-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-auto min-h-[50%] min-w-[50%] rounded-none sm:rounded-2xl ${className}`}>
      {children}
    </div>
  )
}