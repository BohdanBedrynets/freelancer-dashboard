import { clients } from "../data/mockData"

function getStatusStyle(status) {
  if (status === "Completed") {
    return "bg-emerald-400/10 text-emerald-400"
  }

  if (status === "Review") {
    return "bg-amber-400/10 text-amber-400"
  }

  return "bg-blue-400/10 text-blue-400"
}

export default function ClientsSection() {
  return (
    <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold">
            Clients
          </h2>

          <p className="text-sm text-slate-400 mt-1">
            Recent clients and project status
          </p>
        </div>

        <button className="text-sm text-blue-400 hover:text-blue-300">
          Manage clients
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {clients.map((client) => (
          <div
            key={client.name}
            className="bg-slate-950/50 border border-slate-800 rounded-2xl p-5 hover:bg-slate-800/40 transition"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
                {client.initials}
              </div>

              <div>
                <h3 className="font-semibold">
                  {client.name}
                </h3>

                <p className="text-sm text-slate-400">
                  {client.country}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-xs text-slate-500 mb-1">
                  Project
                </p>

                <p className="text-sm text-slate-200">
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