import { useState } from "react"

import {
  Bell,
  Menu,
  Moon,
  Search,
  Sun,
} from "lucide-react"

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

  const notificationItemClass = isDark
    ? "hover:bg-slate-800 border-slate-800"
    : "hover:bg-slate-50 border-slate-200"

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
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <div className="relative">
          <button
            onClick={() => setIsNotificationsOpen((current) => !current)}
            className={`relative w-11 h-11 rounded-xl border flex items-center justify-center transition ${buttonClass}`}
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
                  <div
                    key={notification.title}
                    className={`p-4 border-b last:border-b-0 transition ${notificationItemClass}`}
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
                  </div>
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