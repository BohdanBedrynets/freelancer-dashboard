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
    sectionId: "dashboard-section",
  },
  {
    icon: FolderKanban,
    label: "Projects",
    sectionId: "projects-section",
  },
  {
    icon: Users,
    label: "Clients",
    sectionId: "clients-section",
  },
  {
    icon: Briefcase,
    label: "Earnings",
    sectionId: "earnings-section",
  },
  {
    icon: ClipboardList,
    label: "Tasks",
    sectionId: "tasks-section",
  },
  {
    icon: Settings,
    label: "Settings",
    sectionId: "dashboard-section",
  },
]

export default function Sidebar({
  isSidebarOpen,
  setIsSidebarOpen,
  isDark,
}) {
  function scrollToSection(sectionId) {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })

    setIsSidebarOpen(false)
  }

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
          border-r
          transition-transform duration-300
          ${isDark ? "bg-slate-950 border-slate-800" : "bg-white border-slate-200"}
          ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        <div
          className={`p-6 border-b ${
            isDark ? "border-slate-800" : "border-slate-200"
          }`}
        >
          <h1
            className={`text-3xl font-bold ${
              isDark ? "text-white" : "text-slate-950"
            }`}
          >
            FreelancePro
          </h1>

          <p className={`mt-2 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
            Freelancer Dashboard
          </p>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon

            return (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.sectionId)}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-xl transition
                  ${
                    isDark
                      ? "text-slate-300 hover:bg-slate-900 hover:text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                  }
                `}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>

        <div
          className={`
            absolute bottom-6 left-6 right-6 rounded-2xl p-5 border
            ${
              isDark
                ? "bg-slate-900 border-slate-800"
                : "bg-slate-50 border-slate-200"
            }
          `}
        >
          <p className={`text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>
            Monthly earnings
          </p>

          <h2
            className={`text-5xl font-bold mt-3 ${
              isDark ? "text-white" : "text-slate-950"
            }`}
          >
            $4,250
          </h2>

          <p className="text-emerald-500 mt-2">
            +12% this month
          </p>
        </div>
      </aside>
    </>
  )
}