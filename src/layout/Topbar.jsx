import {
  Bell,
  Menu,
  Moon,
  Search,
  Sun,
} from "lucide-react"

export default function Topbar({
  setIsSidebarOpen,
  isDark,
  theme,
  setTheme,
}) {
  const inputClass = isDark
    ? "bg-slate-900 border-slate-800 text-white placeholder:text-slate-500 focus:border-blue-500"
    : "bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-500"

  const headerClass = isDark
    ? "bg-slate-950 border-slate-800 text-white"
    : "bg-white border-slate-200 text-slate-900"

  const buttonClass = isDark
    ? "bg-slate-900 border-slate-800 hover:bg-slate-800 text-white"
    : "bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-900"

  const profileClass = isDark
    ? "bg-slate-900 border-slate-800"
    : "bg-slate-100 border-slate-200"

  const mutedText = isDark
    ? "text-slate-400"
    : "text-slate-500"

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header
      className={`h-20 border-b px-4 sm:px-6 flex items-center justify-between transition-colors duration-300 ${headerClass}`}
    >
      <div className="flex items-center gap-3 w-full max-w-md">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className={`lg:hidden w-11 h-11 rounded-xl border flex items-center justify-center transition ${buttonClass}`}
        >
          <Menu size={20} />
        </button>

        <div className="relative w-full">
          <Search
            className={`absolute left-4 top-1/2 -translate-y-1/2 ${mutedText}`}
            size={18}
          />

          <input
            type="text"
            placeholder="Search..."
            className={`w-full border rounded-xl pl-11 pr-4 py-3 outline-none text-sm transition ${inputClass}`}
          />
        </div>
      </div>

      <div className="flex items-center gap-3 ml-4">
        <button
          onClick={toggleTheme}
          className={`w-11 h-11 rounded-xl border flex items-center justify-center transition ${buttonClass}`}
        >
          {isDark ? (
            <Sun size={18} />
          ) : (
            <Moon size={18} />
          )}
        </button>

        <button
          className={`w-11 h-11 rounded-xl border flex items-center justify-center transition ${buttonClass}`}
        >
          <Bell size={18} />
        </button>

        <div
          className={`hidden sm:flex items-center gap-3 border rounded-xl px-3 py-2 transition ${profileClass}`}
        >
          <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
            B
          </div>

          <div>
            <p className="font-medium">
              Bohdan
            </p>

            <p className={`text-xs ${mutedText}`}>
              Frontend Developer
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}