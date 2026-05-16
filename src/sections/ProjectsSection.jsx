import { projects } from "../data/mockData"

function getStatusStyle(status) {
  if (status === "Completed") {
    return "bg-emerald-400/10 text-emerald-400"
  }

  if (status === "Review") {
    return "bg-amber-400/10 text-amber-400"
  }

  return "bg-blue-400/10 text-blue-400"
}

export default function ProjectsSection({ cardClass }) {
  return (
    <section className={cardClass}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold">
            Recent projects
          </h2>

          <p className="text-sm text-slate-400 mt-1">
            Current freelance work and deadlines
          </p>
        </div>

        <button className="text-sm text-blue-400 hover:text-blue-300">
          View all
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-sm text-slate-400 border-b border-slate-800">
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
                className="border-b border-slate-800 last:border-0"
              >
                <td className="py-4 font-medium">
                  {project.name}
                </td>

                <td className="py-4 text-slate-400">
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

                <td className="py-4 text-slate-400">
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
  )
}