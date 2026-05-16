import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts"

const earningsData = [
  { month: "Jan", earnings: 1800 },
  { month: "Feb", earnings: 2400 },
  { month: "Mar", earnings: 2200 },
  { month: "Apr", earnings: 3100 },
  { month: "May", earnings: 4250 },
  { month: "Jun", earnings: 3900 },
]

export default function ChartSection() {
  return (
    <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold">
            Earnings overview
          </h2>

          <p className="text-sm text-slate-400 mt-1">
            Monthly revenue from freelance projects
          </p>
        </div>

        <span className="text-sm text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full">
          +18.4%
        </span>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={earningsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />

            <XAxis
              dataKey="month"
              stroke="#64748b"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              stroke="#64748b"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "12px",
                color: "#fff",
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