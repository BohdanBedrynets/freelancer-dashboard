import { useMemo, useState } from "react"

import {
  Bell,
  Briefcase,
  Menu,
  Moon,
  Search,
  Sun,
  User,
} from "lucide-react"

import { clients, projects } from "../data/mockData"

const notifications = [
  {
    title: "New client message",
    description: "Sarah replied to Landing Page Redesign",
    time: "5 min ago",
  },
  {
    title: "Payment received",
    description: "$450 payment was marked as completed",
    time: "1 hour ago",
  },
  {
    title: "Deadline reminder",
    description: "SaaS Dashboard UI is due in 3 days",
    time: "Today",
  },
]

export default function Topbar({
  setIsSidebarOpen,
  isDark,
  theme,
  setTheme,
}) {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

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

  const dropdownClass = isDark
    ? "bg-slate-900 border-slate-800 text-white"
    : "bg-white border-slate-200 text-slate-900"

  const dropdownItemClass = isDark
    ? "hover:bg-slate-800 border-slate-800"
    : "hover:bg-slate-50 border-slate-200"

  const mutedText = isDark ? "text-slate-400" : "text-slate-500"

  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    if (!query) return []

    const projectResults = projects
      .filter((project) =>
        `${project.name} ${project.client} ${project.status}`
          .toLowerCase()
          .includes(query)
      )
      .map((project) => ({
        type: "Project",
        title: project.name,
        subtitle: `${project.client} • ${project.status}`,
        icon: Briefcase,
      }))

    const clientResults = clients
      .filter((client) =>
        `${client.name} ${client.country} ${client.project} ${client.status}`
          .toLowerCase()
          .includes(query)
      )
      .map((client) => ({
        type: "Client",
        title: client.name,
        subtitle: `${client.country} • ${client.project}`,
        icon: User,
      }))

    return [...projectResults, ...clientResults].slice(0, 5)
  }, [searchQuery])

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
          className={`lg:hidden w-11 h-11 rounded-xl border flex items-center justify-center transition cursor-pointer ${buttonClass}`}
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
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search projects or clients..."
            className={`w-full border rounded-xl pl-11 pr-4 py-3 outline-none text-sm transition ${inputClass}`}
          />

          {searchQuery && (
            <div
              className={`absolute left-0 right-0 top-14 rounded-2xl border shadow-2xl z-[120] overflow-hidden ${dropdownClass}`}
            >
              <div className="p-4 border-b border-inherit">
                <p className="font-semibold">
                  Search results
                </p>

                <p className={`text-sm mt-1 ${mutedText}`}>
                  Results for “{searchQuery}”
                </p>
              </div>

              {searchResults.length > 0 ? (
                <div>
                  {searchResults.map((result) => {
                    const Icon = result.icon

                    return (
                      <button
                        key={`${result.type}-${result.title}`}
                        onClick={() => setSearchQuery("")}
                        className={`w-full p-4 border-b last:border-b-0 text-left transition cursor-pointer ${dropdownItemClass}`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                            <Icon size={18} />
                          </div>

                          <div>
                            <p className="text-sm font-medium">
                              {result.title}
                            </p>

                            <p className={`text-sm mt-1 ${mutedText}`}>
                              {result.type} • {result.subtitle}
                            </p>
                          </div>
                        </div>
                      </button>
                    )
                  })}
                </div>
              ) : (
                <div className="p-6 text-center">
                  <p className={`text-sm ${mutedText}`}>
                    No results found
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3 ml-4">
        <button
          onClick={toggleTheme}
          className={`w-11 h-11 rounded-xl border flex items-center justify-center transition cursor-pointer ${buttonClass}`}
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <div className="relative">
          <button
            onClick={() => setIsNotificationsOpen((current) => !current)}
            className={`relative w-11 h-11 rounded-xl border flex items-center justify-center transition cursor-pointer ${buttonClass}`}
          >
            <Bell size={18} />

            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-blue-500 text-white text-[10px] flex items-center justify-center">
              3
            </span>
          </button>

          {isNotificationsOpen && (
            <div
              className={`absolute right-0 top-14 w-80 rounded-2xl border shadow-2xl z-[120] overflow-hidden ${dropdownClass}`}
            >
              <div className="p-4 border-b border-inherit">
                <h3 className="font-semibold">
                  Notifications
                </h3>

                <p className={`text-sm mt-1 ${mutedText}`}>
                  Recent freelance activity
                </p>
              </div>

              <div>
                {notifications.map((notification) => (
                  <button
                    key={notification.title}
                    className={`w-full p-4 border-b last:border-b-0 text-left transition cursor-pointer ${dropdownItemClass}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />

                      <div>
                        <p className="text-sm font-medium">
                          {notification.title}
                        </p>

                        <p className={`text-sm mt-1 ${mutedText}`}>
                          {notification.description}
                        </p>

                        <p className={`text-xs mt-2 ${mutedText}`}>
                          {notification.time}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

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