import { useEffect, useState } from "react"

const defaultTasks = [
  { id: 1, title: "Send homepage wireframe", completed: false },
  { id: 2, title: "Review client feedback", completed: true },
  { id: 3, title: "Prepare project proposal", completed: false },
  { id: 4, title: "Update portfolio case study", completed: false },
]

export default function TasksSection() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("freelancerTasks")
    return savedTasks ? JSON.parse(savedTasks) : defaultTasks
  })

  const [filter, setFilter] = useState("All")

  useEffect(() => {
    localStorage.setItem("freelancerTasks", JSON.stringify(tasks))
  }, [tasks])

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Active") return !task.completed
    if (filter === "Completed") return task.completed
    return true
  })

  function toggleTask(id) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  return (
    <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">
          Tasks
        </h2>

        <p className="text-sm text-slate-400 mt-1">
          Daily freelance workflow
        </p>
      </div>

      <div className="flex gap-2 mb-5">
        {["All", "Active", "Completed"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-3 py-1 rounded-full text-sm transition ${
              filter === item
                ? "bg-blue-500 text-white"
                : "bg-slate-800 text-slate-400 hover:text-white"
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
            className="w-full flex items-start gap-3 text-left bg-slate-950/50 border border-slate-800 rounded-xl p-4 hover:bg-slate-800/60 transition"
          >
            <span
              className={`mt-1 w-5 h-5 rounded-md border flex-shrink-0 ${
                task.completed
                  ? "bg-emerald-500 border-emerald-500"
                  : "border-slate-600"
              }`}
            />

            <span
              className={`text-sm ${
                task.completed
                  ? "text-slate-500 line-through"
                  : "text-slate-200"
              }`}
            >
              {task.title}
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}