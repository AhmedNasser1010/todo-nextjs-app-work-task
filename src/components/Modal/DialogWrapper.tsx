export default function DialogWrapper({ children, open }: { children: React.ReactNode; open: boolean; }) {
  return (
    <div className={`${open ? 'fixed' : 'hidden'} top-0 left-0 bg-[#00000042] w-full h-full z-10`}>
      {children}
    </div>
  )
}