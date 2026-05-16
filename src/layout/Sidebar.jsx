import {
  Briefcase,
  ClipboardList,
  FolderKanban,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react"

const navItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
  },
  {
    icon: FolderKanban,
    label: "Projects",
  },
  {
    icon: Users,
    label: "Clients",
  },
  {
    icon: Briefcase,
    label: "Earnings",
  },
  {
    icon: ClipboardList,
    label: "Tasks",
  },
  {
    icon: Settings,
    label: "Settings",
  },
]

export default function Sidebar({
  isSidebarOpen,
  setIsSidebarOpen,
}) {
  return (
    <>
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      <aside
        className={`
          fixed lg:static top-0 left-0 z-50
          h-screen w-72
          border-r border-slate-800
          bg-slate-950
          transition-transform duration-300
          ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        <div className="p-6 border-b border-slate-800">
          <h1 className="text-3xl font-bold text-white">
            FreelancePro
          </h1>

          <p className="text-slate-400 mt-2">
            Freelancer Dashboard
          </p>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon

            return (
              <button
                key={item.label}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-900 hover:text-white transition"
              >
                <Icon size={20} />

                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>

        <div className="absolute bottom-6 left-6 right-6 bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <p className="text-slate-400 text-sm">
            Monthly earnings
          </p>

          <h2 className="text-5xl font-bold mt-3 text-white">
            $4,250
          </h2>

          <p className="text-emerald-400 mt-2">
            +12% this month
          </p>
        </div>
      </aside>
    </>
  )
}