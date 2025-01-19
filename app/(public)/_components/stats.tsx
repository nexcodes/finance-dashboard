import { Users, ArrowUpRight, LineChart, Wallet } from "lucide-react";

const stats = [
  {
    name: "Active Users",
    value: "10,000+",
    icon: Users,
    description: "Trust our platform",
  },
  {
    name: "Transactions",
    value: "₨1M+",
    icon: ArrowUpRight,
    description: "Processed monthly",
  },
  {
    name: "Data Points",
    value: "500K+",
    icon: LineChart,
    description: "Analyzed daily",
  },
  {
    name: "Total Savings",
    value: "₨100M+",
    icon: Wallet,
    description: "Tracked by users",
  },
];

export default function Stats() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50/50 p-4">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="relative group overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="p-3 rounded-xl bg-blue-600/10 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">{stat.name}</p>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <p className="text-sm text-gray-500">{stat.description}</p>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-blue-600/10 rounded-2xl group-hover:border-blue-600/25 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
