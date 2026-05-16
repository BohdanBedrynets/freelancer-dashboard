import {
  LayoutDashboard,
  FolderKanban,
  Users,
  Wallet,
  CheckSquare,
  Settings
} from "lucide-react"

const menuItems = [
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
    icon: Wallet,
    label: "Earnings",
  },
  {
    icon: CheckSquare,
    label: "Tasks",
  },
  {
    icon: Settings,
    label: "Settings",
  },
]

export default function Sidebar() {
  return (
    <aside className="w-80 bg-slate-900 border-r border-slate-800 p-6 hidden lg:flex flex-col">

      <div className="mb-10">
        <h1 className="text-2xl font-bold text-white">
          FreelancePro
        </h1>

        <p className="text-slate-400 text-sm mt-1">
          Freelancer Dashboard
        </p>
      </div>

      <nav className="flex flex-col gap-2">

        {menuItems.map((item, index) => {
          const Icon = item.icon

          return (
            <button
              key={index}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-800 hover:text-white transition"
            >
              <Icon size={20} />

              <span className="font-medium">
                {item.label}
              </span>
            </button>
          )
        })}

      </nav>

      <div className="mt-auto mb-4 bg-slate-800 rounded-2xl p-4">
        <p className="text-sm text-slate-300">
          Monthly earnings
        </p>

        <h2 className="text-3xl font-bold mt-2">
          $4,250
        </h2>

        <p className="text-emerald-400 text-sm mt-1">
          +12% this month
        </p>
      </div>

    </aside>
  )
}