import { useEffect, useState } from "react"

import Sidebar from "./layout/Sidebar"
import Topbar from "./layout/Topbar"

import StatsSection from "./sections/StatsSection"
import ChartSection from "./sections/ChartSection"
import ProjectsSection from "./sections/ProjectsSection"
import TasksSection from "./sections/TasksSection"
import ClientsSection from "./sections/ClientsSection"

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark"
  })

  const isDark = theme === "dark"

  const cardClass = isDark
    ? "dashboard-card dashboard-card-dark"
    : "dashboard-card dashboard-card-light"

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <div
      className={`min-h-screen flex transition-colors duration-300 ${
        isDark ? "app-bg" : "app-bg-light"
      }`}
    >
    <Sidebar
      isSidebarOpen={isSidebarOpen}
      setIsSidebarOpen={setIsSidebarOpen}
      isDark={isDark}
      activeSection={activeSection}
      setActiveSection={setActiveSection}
    />

      <div className="flex-1 flex flex-col">
        <Topbar
          setIsSidebarOpen={setIsSidebarOpen}
          theme={theme}
          setTheme={setTheme}
          isDark={isDark}
        />

        <main className="p-4 sm:p-6 xl:p-8 space-y-6 xl:space-y-8">
          <StatsSection isDark={isDark} cardClass={cardClass} />

          <ChartSection isDark={isDark} cardClass={cardClass} />

          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            <div className="xl:col-span-3">
              <ProjectsSection isDark={isDark} cardClass={cardClass} />
            </div>

            <TasksSection isDark={isDark} cardClass={cardClass} />
          </div>

          <ClientsSection isDark={isDark} cardClass={cardClass} />
        </main>
      </div>
    </div>
  )
}