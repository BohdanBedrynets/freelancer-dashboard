export default function StatCard({ title, value, change, icon: Icon }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-400">
            {title}
          </p>

          <h3 className="text-3xl font-bold mt-3">
            {value}
          </h3>

          <p className="text-sm text-emerald-400 mt-2">
            {change}
          </p>
        </div>

        <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
          <Icon size={22} />
        </div>
      </div>
    </div>
  )
}