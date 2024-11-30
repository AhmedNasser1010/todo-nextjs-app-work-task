export default function TaskDescription({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm">
      {children}
    </p>
  )
}