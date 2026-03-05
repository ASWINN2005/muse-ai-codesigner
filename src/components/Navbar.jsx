export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 h-20 bg-slate-500/50  backdrop-blur-md border-b border-slate-800 shadow-xl">
      <div className="max-w-7xl mx-auto h-full px-4"> 
        <div className="flex justify-center items-center h-full">
          <span className="flex items-center tracking-tighter">
            <span className="text-white  font-bold text-4xl">Muse</span>
            <span className="text-amber-400 font-bold text-4xl">Ai</span>
          </span>
          <h1 className="text-white font-light text-4xl">- Your Creative Co-Designer</h1>
        </div>
      </div>
    </nav>
  )
}