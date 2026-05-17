import {
  DollarSign,
  FolderKanban,
  CheckCircle,
  Star,
} from "lucide-react"

import StatCard from "../components/StatCard"

const stats = [
  {
    title: "Total earnings",
    value: "$12,840",
    change: "+18% from last month",
    icon: DollarSign,
  },
  {
    title: "Active projects",
    value: "8",
    change: "+3 new projects",
    icon: FolderKanban,
  },
  {
    title: "Completed orders",
    value: "46",
    change: "+7 this month",
    icon: CheckCircle,
  },
  {
    title: "Client satisfaction",
    value: "98%",
    change: "Based on 32 reviews",
    icon: Star,
  },
]

export default function StatsSection({ isDark }) {
  return (
    <section
      id="dashboard-section"
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 scroll-mt-24"
    >
      {stats.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          icon={stat.icon}
          isDark={isDark}
        />
      ))}
    </section>
  )
}