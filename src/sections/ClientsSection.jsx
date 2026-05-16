import { clients } from "../data/mockData"

function getStatusStyle(status) {
  if (status === "Completed") {
    return "bg-emerald-400/10 text-emerald-500"
  }

  if (status === "Review") {
    return "bg-amber-400/10 text-amber-500"
  }

  return "bg-blue-400/10 text-blue-500"
}

export default function ClientsSection({ isDark }) {
  const sectionClass = isDark
    ? "bg-slate-900 border-slate-800 text-white"
    : "bg-white border-slate-200 text-slate-900"

  const cardClass = isDark
    ? "bg-slate-950/50 border-slate-800 hover:bg-slate-800/40"
    : "bg-slate-50 border-slate-200 hover:bg-slate-100"

  const mutedText = isDark ? "text-slate-400" : "text-slate-500"
  const softMutedText = isDark ? "text-slate-500" : "text-slate-400"
  const projectText = isDark ? "text-slate-200" : "text-slate-800"

  return (
    <section
      className={`rounded-2xl border p-6 transition-colors duration-300 ${sectionClass}`}
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold">
            Clients
          </h2>

          <p className={`text-sm mt-1 ${mutedText}`}>
            Recent clients and project status
          </p>
        </div>

        <button className="text-sm text-blue-500 hover:text-blue-400">
          Manage clients
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {clients.map((client) => (
          <div
            key={client.name}
            className={`border rounded-2xl p-5 transition ${cardClass}`}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold">
                {client.initials}
              </div>

              <div>
                <h3 className="font-semibold">
                  {client.name}
                </h3>

                <p className={`text-sm ${mutedText}`}>
                  {client.country}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <p className={`text-xs mb-1 ${softMutedText}`}>
                  Project
                </p>

                <p className={`text-sm ${projectText}`}>
                  {client.project}
                </p>
              </div>

              <span
                className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                  client.status
                )}`}
              >
                {client.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}