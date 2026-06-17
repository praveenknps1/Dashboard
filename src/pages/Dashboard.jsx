
import { projects, rmas, productionTrend, auditData, supplierRadar } from "../data/dummyData";
import { KpiCard } from "../components/StatCard";
import { SectionHeader, ChartCard } from "../components/BasicUI";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
} from "recharts";
import { statusColor } from "../components/StatusBadge";


export default function Dashboard() {
  return (
    <div>
      <SectionHeader
        title="Executive Dashboard"
        sub="Real-time overview of portfolio health and operational KPIs"
      />

      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 24 }}>
        <KpiCard label="Total Projects" value={projects.length} sub="Across all sites" color="#3b82f6" icon="📁" />
        <KpiCard label="Active Projects" value={projects.filter((p) => p.status !== "Delayed").length} sub="+2 this quarter" color="#10b981" icon="✅" />
        <KpiCard label="Delayed" value={projects.filter((p) => p.status === "Delayed").length} sub="Requires attention" color="#ef4444" icon="⚠️" />
        <KpiCard label="Production Eff." value="96.1%" sub="vs 94.8% last month" color="#f59e0b" icon="🏭" />
        <KpiCard label="Quality Score" value="94.2" sub="Audit avg. (0-100)" color="#8b5cf6" icon="🎯" />
        <KpiCard label="Open RMAs" value={rmas.filter((r) => r.status !== "Complete").length} sub="2 high priority" color="#06b6d4" icon="🔧" />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        <ChartCard title="Project Status Distribution">
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={Object.entries(
                  projects.reduce((a, p) => {
                    a[p.status] = (a[p.status] || 0) + 1;
                    return a;
                  }, {})
                ).map(([name, value]) => ({ name, value }))}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}`}
              >
                {Object.entries(
                  projects.reduce((a, p) => {
                    a[p.status] = (a[p.status] || 0) + 1;
                    return a;
                  }, {})
                ).map((_, i) => (
                  <Cell
                    key={i}
                    fill={[
                      statusColor("On Track"),
                      statusColor("Risk"),
                      statusColor("Delayed"),
                    ][i % 3]}
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

        <ChartCard title="Production Output Trend (6 Months)">
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={productionTrend}>
              <defs>
                <linearGradient id="pg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3347" />
              <XAxis dataKey="month" tick={{ fill: "#7c8ba1", fontSize: 11 }} />
              <YAxis tick={{ fill: "#7c8ba1", fontSize: 11 }} />
              <Tooltip
                contentStyle={{
                  background: "#1e2433",
                  border: "1px solid #2a3347",
                  borderRadius: 8,
                  color: "#f1f5f9",
                }}
              />
              <Area
                type="monotone"
                dataKey="actual"
                stroke="#3b82f6"
                fill="url(#pg)"
                strokeWidth={2}
                name="Actual"
              />
              <Line
                type="monotone"
                dataKey="planned"
                stroke="#f59e0b"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
                name="Planned"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <ChartCard title="Quality Defect Trend">
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={auditData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3347" />
              <XAxis dataKey="month" tick={{ fill: "#7c8ba1", fontSize: 11 }} />
              <YAxis domain={[80, 100]} tick={{ fill: "#7c8ba1", fontSize: 11 }} />
              <Tooltip
                contentStyle={{
                  background: "#1e2433",
                  border: "1px solid #2a3347",
                  borderRadius: 8,
                  color: "#f1f5f9",
                }}
              />
              <Bar dataKey="score" fill="#10b981" radius={[4, 4, 0, 0]} name="Audit Score" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Supplier Performance Radar">
          <ResponsiveContainer width="100%" height={200}>
            <RadarChart data={supplierRadar}>
              <PolarGrid stroke="#2a3347" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: "#7c8ba1", fontSize: 11 }} />
              <Radar name="Score" dataKey="A" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.25} />
              <Tooltip
                contentStyle={{
                  background: "#1e2433",
                  border: "1px solid #2a3347",
                  borderRadius: 8,
                  color: "#f1f5f9",
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}

