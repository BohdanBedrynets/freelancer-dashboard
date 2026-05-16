import Sidebar from "./layout/Sidebar"
import Topbar from "./layout/Topbar"

import StatsSection from "./sections/StatsSection"
import ChartSection from "./sections/ChartSection"
import ProjectsSection from "./sections/ProjectsSection"
import TasksSection from "./sections/TasksSection"
import ClientsSection from "./sections/ClientsSection"

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex">
      
      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Topbar />

        <main className="p-4 sm:p-6 xl:p-8 space-y-6 xl:space-y-8">

          <StatsSection />

          <ChartSection />

          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            <div className="xl:col-span-3">
              <ProjectsSection />
            </div>

            <TasksSection />
          </div>

          <ClientsSection />

        </main>
      </div>
    </div>
  )
}