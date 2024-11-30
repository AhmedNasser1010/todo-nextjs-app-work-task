export default function ActionIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-7 h-5 flex items-center justify-center cursor-pointer">
      {children}
    </div>
  )
}