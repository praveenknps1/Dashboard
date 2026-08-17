
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { statusColor } from "./StatusBadge";
import { ChartCard } from "./BasicUI";

export default function StatusPieChart({ projects }) {
  const statusCounts = projects.reduce((a, p) => {
    a[p.status] = (a[p.status] || 0) + 1;
    return a;
  }, {});

  const pieData = Object.entries(statusCounts).map(([name, value]) => ({ name, value }));

  return (
    <ChartCard title="Project Status Distribution">
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
            <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            dataKey="value"
            label={({ name, value }) => `${name}: ${value}`}
          >
            {pieData.map((_, i) => (
              <Cell
                key={i}
                fill={[statusColor("On Track"), statusColor("Risk"), statusColor("Delayed")][i % 3]}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              background: "#1e2433",
              border: "1px solid #2a3347",
              borderRadius: 8,
              color: "#f1f5f9",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

