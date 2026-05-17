export default function StatCard({
  title,
  value,
  change,
  icon: Icon,
  isDark,
}) {
  const cardClass = isDark
    ? "bg-slate-900 border-slate-800 text-white"
    : "bg-white border-slate-200 text-slate-900"

  const mutedText = isDark
    ? "text-slate-400"
    : "text-slate-500"

  const iconBox = isDark
    ? "bg-blue-500/10 text-blue-400"
    : "bg-blue-100 text-blue-600"

  return (
    <div
      className={`border rounded-2xl p-6 transition-colors duration-300 ${cardClass}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className={`text-sm ${mutedText}`}>
            {title}
          </p>

          <h3 className="text-3xl font-bold mt-3">
            {value}
          </h3>

          <p className="text-sm text-emerald-500 mt-2">
            {change}
          </p>
        </div>

<div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center cursor-pointer hover:bg-blue-500/20 transition">
  <Icon size={22} />
</div>
      </div>
    </div>
  )
}