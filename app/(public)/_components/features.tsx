import {
  BarChart3,
  Calendar,
  PieChart,
  Filter,
  Tags,
  Wallet,
} from "lucide-react";

const features = [
  {
    name: "Visual Analytics",
    description:
      "Understand your finances at a glance with intuitive charts and graphs.",
    icon: BarChart3,
  },
  {
    name: "Date Filtering",
    description: "Analyze your spending patterns across any time period.",
    icon: Calendar,
  },
  {
    name: "Category Management",
    description: "Organize transactions with custom categories and tags.",
    icon: Tags,
  },
  {
    name: "Smart Filtering",
    description:
      "Find transactions quickly with powerful search and filter options.",
    icon: Filter,
  },
  {
    name: "Multiple Accounts",
    description:
      "Manage all your accounts in one place - checking, savings, and credit cards.",
    icon: Wallet,
  },
  {
    name: "Expense Analysis",
    description:
      "Track where your money goes with detailed expense breakdowns.",
    icon: PieChart,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-50/50" />
      <div className="container relative">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Everything you need to manage your finances
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600 text-lg">
            Powerful features that help you take control of your money with
            confidence
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-blue-600/10 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{feature.name}</h3>
              </div>
              <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
                {feature.description}
              </p>
              <div
                className="absolute inset-0 border-2 border-transparent group-hover:border-blue-600/25 rounded-2xl transition-colors"
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
