import { Bell, Search } from "lucide-react"

export default function Topbar() {
  return (
    <header className="h-20 border-b border-slate-800 bg-slate-950 px-6 flex items-center justify-between">

      <div className="relative w-full max-w-md">

        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          size={18}
        />

        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-11 pr-4 py-3 outline-none text-sm focus:border-blue-500 transition"
        />

      </div>

      <div className="flex items-center gap-4 ml-6">

        <button className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-slate-800 transition">
          <Bell size={18} />
        </button>

        <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2">

          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold">
            B
          </div>

          <div className="hidden sm:block">
            <p className="font-medium">
              Bohdan
            </p>

            <p className="text-xs text-slate-400">
              Frontend Developer
            </p>
          </div>

        </div>

      </div>

    </header>
  )
}