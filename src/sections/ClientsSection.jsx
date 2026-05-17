import { useState } from "react"
import { X } from "lucide-react"
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
  const [selectedClient, setSelectedClient] = useState(null)

  const sectionClass = isDark
    ? "bg-slate-900 border-slate-800 text-white"
    : "bg-white border-slate-200 text-slate-900"

  const cardClass = isDark
    ? "bg-slate-950/50 border-slate-800 hover:bg-slate-800/40"
    : "bg-slate-50 border-slate-200 hover:bg-slate-100"

  const mutedText = isDark
    ? "text-slate-400"
    : "text-slate-500"

  const softMutedText = isDark
    ? "text-slate-500"
    : "text-slate-400"

  const projectText = isDark
    ? "text-slate-200"
    : "text-slate-800"

  const modalClass = isDark
    ? "bg-slate-900 border-slate-800 text-white"
    : "bg-white border-slate-200 text-slate-900"

  const modalSoftClass = isDark
    ? "bg-slate-950/50 border-slate-800"
    : "bg-slate-50 border-slate-200"

  return (
    <>
      <section
        id="clients-section"
        className={`rounded-2xl border p-6 transition-colors duration-300 scroll-mt-24 ${sectionClass}`}
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

          <button
            onClick={() =>
              document
                .getElementById("clients-section")
                ?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
            }
            className="text-sm text-blue-500 hover:text-blue-400 cursor-pointer"
          >
            Manage clients
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {clients.map((client) => (
            <button
              key={client.name}
              onClick={() => setSelectedClient(client)}
              className={`border rounded-2xl p-5 transition text-left cursor-pointer ${cardClass}`}
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
            </button>
          ))}
        </div>
      </section>

      {selectedClient && (
        <div className="fixed inset-0 z-[100] flex items-stretch sm:items-center justify-center">
          <div
            onClick={() => setSelectedClient(null)}
            className="absolute inset-0 bg-black/50"
          />

          <div
            className={`relative w-full h-full sm:h-auto sm:max-h-[90vh] sm:max-w-md overflow-y-auto border p-4 shadow-2xl sm:rounded-2xl ${modalClass}`}
          >
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold text-2xl">
                  {selectedClient.initials}
                </div>

                <div>
                  <p className={`text-sm mb-1 ${mutedText}`}>
                    Client details
                  </p>

                  <h3 className="text-2xl font-bold">
                    {selectedClient.name}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedClient(null)}
                className={`w-10 h-10 rounded-xl border flex items-center justify-center transition ${
                  isDark
                    ? "border-slate-800 hover:bg-slate-800"
                    : "border-slate-200 hover:bg-slate-100"
                }`}
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-3 mb-4">
              <div className={`rounded-xl border p-3 overflow-hidden ${modalSoftClass}`}>
                <p className={`text-xs mb-1 ${mutedText}`}>
                  Country
                </p>

                <p className="font-semibold">
                  {selectedClient.country}
                </p>
              </div>

              <div className={`rounded-xl border p-3 ${modalSoftClass}`}>
                <p className={`text-xs mb-1 ${mutedText}`}>
                  Status
                </p>

                <span
                  className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                    selectedClient.status
                  )}`}
                >
                  {selectedClient.status}
                </span>
              </div>

              <div className={`rounded-xl border p-3 ${modalSoftClass}`}>
                <p className={`text-xs mb-1 ${mutedText}`}>
                  Current project
                </p>

                <p className="font-semibold">
                  {selectedClient.project}
                </p>
              </div>
            </div>

            <div className={`rounded-xl border p-3 ${modalSoftClass}`}>
              <p className={`text-xs mb-2 ${mutedText}`}>
                Notes
              </p>

              <p className={`text-sm leading-6 break-words ${mutedText}`}>
                This client is connected to an active freelance workflow
                with project tracking and delivery status.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}