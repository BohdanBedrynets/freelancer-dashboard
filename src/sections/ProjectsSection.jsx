import { useState } from "react"
import { X } from "lucide-react"
import { projects } from "../data/mockData"

function getStatusStyle(status) {
  if (status === "Completed") {
    return "bg-emerald-400/10 text-emerald-500"
  }

  if (status === "Review") {
    return "bg-amber-400/10 text-amber-500"
  }

  return "bg-blue-400/10 text-blue-500"
}

export default function ProjectsSection({ isDark }) {
  const [selectedProject, setSelectedProject] = useState(null)

  const sectionClass = isDark
    ? "bg-slate-900 border-slate-800 text-white"
    : "bg-white border-slate-200 text-slate-900"

  const mutedText = isDark ? "text-slate-400" : "text-slate-500"
  const rowBorder = isDark ? "border-slate-800" : "border-slate-200"
  const headText = isDark ? "text-slate-400" : "text-slate-500"

  const modalClass = isDark
    ? "bg-slate-900 border-slate-800 text-white"
    : "bg-white border-slate-200 text-slate-900"

  const modalSoftClass = isDark
    ? "bg-slate-950/50 border-slate-800"
    : "bg-slate-50 border-slate-200"

  return (
    <>
      <section
        id="projects-section"
        className={`rounded-2xl border p-6 transition-colors duration-300 scroll-mt-24 ${sectionClass}`}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold">
              Recent projects
            </h2>

            <p className={`text-sm mt-1 ${mutedText}`}>
              Current freelance work and deadlines
            </p>
          </div>

          <button
            onClick={() =>
              document
                .getElementById("projects-section")
                ?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="text-sm text-blue-500 hover:text-blue-400"
          >
            View all
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className={`text-sm border-b ${headText} ${rowBorder}`}>
                <th className="pb-4 font-medium">Project</th>
                <th className="pb-4 font-medium">Client</th>
                <th className="pb-4 font-medium">Status</th>
                <th className="pb-4 font-medium">Deadline</th>
                <th className="pb-4 font-medium text-right">Price</th>
              </tr>
            </thead>

            <tbody>
              {projects.map((project) => (
                <tr
                  key={project.name}
                  onClick={() => setSelectedProject(project)}
                  className={`border-b last:border-0 cursor-pointer transition ${
                    isDark
                      ? `hover:bg-slate-800/40 ${rowBorder}`
                      : `hover:bg-slate-50 ${rowBorder}`
                  }`}
                >
                  <td className="py-4 font-medium">
                    {project.name}
                  </td>

                  <td className={`py-4 ${mutedText}`}>
                    {project.client}
                  </td>

                  <td className="py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                        project.status
                      )}`}
                    >
                      {project.status}
                    </span>
                  </td>

                  <td className={`py-4 ${mutedText}`}>
                    {project.deadline}
                  </td>

                  <td className="py-4 text-right font-semibold">
                    {project.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div
            onClick={() => setSelectedProject(null)}
            className="absolute inset-0 bg-black/50"
          />

          <div
            className={`relative w-full max-w-xl rounded-2xl border p-6 shadow-2xl ${modalClass}`}
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className={`text-sm mb-1 ${mutedText}`}>
                  Project details
                </p>

                <h3 className="text-2xl font-bold">
                  {selectedProject.name}
                </h3>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className={`w-10 h-10 rounded-xl border flex items-center justify-center transition ${
                  isDark
                    ? "border-slate-800 hover:bg-slate-800"
                    : "border-slate-200 hover:bg-slate-100"
                }`}
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className={`rounded-xl border p-4 ${modalSoftClass}`}>
                <p className={`text-xs mb-1 ${mutedText}`}>Client</p>
                <p className="font-semibold">{selectedProject.client}</p>
              </div>

              <div className={`rounded-xl border p-4 ${modalSoftClass}`}>
                <p className={`text-xs mb-1 ${mutedText}`}>Status</p>
                <span
                  className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                    selectedProject.status
                  )}`}
                >
                  {selectedProject.status}
                </span>
              </div>

              <div className={`rounded-xl border p-4 ${modalSoftClass}`}>
                <p className={`text-xs mb-1 ${mutedText}`}>Deadline</p>
                <p className="font-semibold">{selectedProject.deadline}</p>
              </div>

              <div className={`rounded-xl border p-4 ${modalSoftClass}`}>
                <p className={`text-xs mb-1 ${mutedText}`}>Budget</p>
                <p className="font-semibold">{selectedProject.price}</p>
              </div>
            </div>

            <div className={`rounded-xl border p-4 ${modalSoftClass}`}>
              <p className={`text-xs mb-2 ${mutedText}`}>Notes</p>

              <p className={`text-sm leading-6 ${mutedText}`}>
                This project includes responsive frontend implementation,
                clean component structure, client communication and delivery
                tracking.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}