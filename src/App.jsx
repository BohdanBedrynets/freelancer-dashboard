import { useEffect, useState } from "react"

import Sidebar from "./layout/Sidebar"
import Topbar from "./layout/Topbar"

import StatsSection from "./sections/StatsSection"
import ChartSection from "./sections/ChartSection"
import ProjectsSection from "./sections/ProjectsSection"
import TasksSection from "./sections/TasksSection"
import ClientsSection from "./sections/ClientsSection"

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark"
  })

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  const cardClass =
    theme === "dark"
      ? "dashboard-card dashboard-card-dark"
      : "dashboard-card dashboard-card-light"

  return (
    <div
      className={
        theme === "dark"
          ? "min-h-screen bg-[#0f172a] text-white flex transition-colors duration-300"
          : "min-h-screen bg-slate-100 text-slate-950 flex transition-colors duration-300"
      }
    >
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="flex-1 flex flex-col lg:ml-0">
        <Topbar
          theme={theme}
          setTheme={setTheme}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <main className="p-4 sm:p-6 xl:p-8 space-y-6 xl:space-y-8">
          <StatsSection
            theme={theme}
            cardClass={cardClass}
          />

          <ChartSection
            theme={theme}
            cardClass={cardClass}
          />

          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            <div className="xl:col-span-3">
              <ProjectsSection
                theme={theme}
                cardClass={cardClass}
              />
            </div>

            <TasksSection
              theme={theme}
              cardClass={cardClass}
            />
          </div>

          <ClientsSection
            theme={theme}
            cardClass={cardClass}
          />
        </main>
      </div>
    </div>
  )
}