import { earningsData } from "../data/mockData"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts"

export default function ChartSection({ cardClass, isDark }) {
  const mutedText = isDark ? "text-slate-400" : "text-slate-500"
  const gridColor = isDark ? "#1e293b" : "#cbd5e1"
  const axisColor = isDark ? "#64748b" : "#475569"

  return (
    <section className={cardClass}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold">
            Earnings overview
          </h2>

          <p className={`text-sm mt-1 ${mutedText}`}>
            Monthly revenue from freelance projects
          </p>
        </div>

        <span className="text-sm text-emerald-500 bg-emerald-400/10 px-3 py-1 rounded-full">
          +18.4%
        </span>
      </div>

      <div className="h-[300px] min-w-0">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={earningsData}>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />

            <XAxis
              dataKey="month"
              stroke={axisColor}
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              stroke={axisColor}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: isDark ? "#0f172a" : "#ffffff",
                border: isDark ? "1px solid #334155" : "1px solid #cbd5e1",
                borderRadius: "12px",
                color: isDark ? "#fff" : "#0f172a",
              }}
              formatter={(value) => [`$${value}`, "Earnings"]}
            />

            <Line
              type="monotone"
              dataKey="earnings"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}