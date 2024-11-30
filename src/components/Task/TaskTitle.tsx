export default function TaskTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-semibold">
      {children}
    </h3>
  )
}