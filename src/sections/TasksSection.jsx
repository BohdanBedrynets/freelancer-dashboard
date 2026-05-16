import { useEffect, useMemo, useState } from "react"

const defaultTasks = [
  { id: 1, title: "Send homepage wireframe", completed: false },
  { id: 2, title: "Review client feedback", completed: true },
  { id: 3, title: "Prepare project proposal", completed: false },
  { id: 4, title: "Update portfolio case study", completed: false },
]

export default function TasksSection() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("freelancerTasks")

    return savedTasks
      ? JSON.parse(savedTasks)
      : defaultTasks
  })

  const [filter, setFilter] = useState("All")

  useEffect(() => {
    localStorage.setItem(
      "freelancerTasks",
      JSON.stringify(tasks)
    )
  }, [tasks])

  function toggleTask(id) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    )
  }

  const filteredTasks = useMemo(() => {
    if (filter === "Active") {
      return tasks.filter((task) => !task.completed)
    }

    if (filter === "Completed") {
      return tasks.filter((task) => task.completed)
    }

    return tasks
  }, [tasks, filter])

  const completedCount = tasks.filter(
    (task) => task.completed
  ).length

  return (
    <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-white">
            Tasks
          </h2>

          <p className="text-sm text-slate-400 mt-1">
            Daily freelance workflow
          </p>
        </div>

        <div className="text-right">
          <p className="text-emerald-400 text-lg font-semibold">
            {completedCount}/{tasks.length}
          </p>

          <p className="text-xs text-slate-500">
            completed
          </p>
        </div>
      </div>

      <div className="flex gap-2 mb-5 overflow-x-auto">
        {["All", "Active", "Completed"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-3 py-1 rounded-full text-sm whitespace-nowrap transition ${
              filter === item
                ? "bg-blue-500 text-white"
                : "bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filteredTasks.map((task) => (
          <button
            key={task.id}
            onClick={() => toggleTask(task.id)}
            className={`w-full flex items-start gap-3 text-left border rounded-xl p-4 transition ${
              task.completed
                ? "bg-slate-900 border-slate-800 opacity-70"
                : "bg-slate-950/50 border-slate-800 hover:bg-slate-800/60"
            }`}
          >
            <span
              className={`mt-1 w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 transition ${
                task.completed
                  ? "bg-emerald-500 border-emerald-500"
                  : "border-slate-600"
              }`}
            >
              {task.completed && (
                <span className="text-[10px] text-white">
                  ✓
                </span>
              )}
            </span>

            <span
              className={`text-sm transition ${
                task.completed
                  ? "text-slate-500 line-through"
                  : "text-slate-200"
              }`}
            >
              {task.title}
            </span>
          </button>
        ))}

        {filteredTasks.length === 0 && (
          <div className="border border-dashed border-slate-700 rounded-xl p-6 text-center">
            <p className="text-sm text-slate-500">
              No tasks found
            </p>
          </div>
        )}
      </div>
    </section>
  )
}