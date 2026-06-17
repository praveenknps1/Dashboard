
import { BarChart, Bar, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Cell, LineChart, Line, AreaChart, Area } from "recharts";
import { analyticsOTD, productionTrend, suppliers } from "../data/dummyData";
import { KpiCard } from "../components/StatCard";
import { SectionHeader, ChartCard } from "../components/BasicUI";

export default function Analytics() {
  return (
    <div>
      <SectionHeader title="Analytics & Reporting" sub="Business intelligence across all operational domains" />

      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 24 }}>
        <KpiCard label="OTD Rate" value="92%" sub="+4% vs last quarter" color="#10b981" icon="🎯" />
        <KpiCard label="Production Util." value="96.1%" sub="All plants avg" color="#3b82f6" icon="🏭" />
        <KpiCard label="Quality Index" value="94.2" sub="Composite score" color="#8b5cf6" icon="📊" />
        <KpiCard label="Supplier Score" value="88.2" sub="Weighted avg" color="#f59e0b" icon="⭐" />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        <ChartCard title="On-Time Delivery Rate (%)">
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={analyticsOTD}>
              <defs>
                <linearGradient id="otdg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3347" />
              <XAxis dataKey="month" tick={{ fill: "#7c8ba1", fontSize: 11 }} />
              <YAxis domain={[80, 100]} tick={{ fill: "#7c8ba1", fontSize: 11 }} />
              <Tooltip contentStyle={{ background: "#1e2433", border: "1px solid #2a3347", borderRadius: 8, color: "#f1f5f9" }} />
              <Area type="monotone" dataKey="rate" stroke="#10b981" fill="url(#otdg)" strokeWidth={2} name="OTD %" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Production Utilization by Month">
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={productionTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3347" />
              <XAxis dataKey="month" tick={{ fill: "#7c8ba1", fontSize: 11 }} />
              <YAxis domain={[88, 100]} tick={{ fill: "#7c8ba1", fontSize: 11 }} />
              <Tooltip contentStyle={{ background: "#1e2433", border: "1px solid #2a3347", borderRadius: 8, color: "#f1f5f9" }} />
              <Line type="monotone" dataKey="efficiency" stroke="#3b82f6" strokeWidth={3} dot={{ fill: "#3b82f6", r: 5 }} name="Efficiency %" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16 }}>
        <ChartCard title="Supplier Scorecard">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={suppliers}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3347" />
              <XAxis dataKey="name" tick={{ fill: "#7c8ba1", fontSize: 11 }} />
              <YAxis domain={[60, 100]} tick={{ fill: "#7c8ba1", fontSize: 11 }} />
              <Tooltip contentStyle={{ background: "#1e2433", border: "1px solid #2a3347", borderRadius: 8, color: "#f1f5f9" }} />
              <Bar dataKey="score" radius={[4, 4, 0, 0]} name="Score">
                {suppliers.map((s, i) => (
                  <Cell key={i} fill={s.score >= 90 ? "#10b981" : s.score >= 80 ? "#f59e0b" : "#ef4444"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <div style={{ background: "#1e2433", border: "1px solid #2a3347", borderRadius: 12, padding: 20 }}>
          <div style={{ color: "#94a3b8", fontSize: 12, fontWeight: 700, letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 16 }}>
            Export Reports
          </div>
          {[
            ["📊 Production Summary", "XLSX"],
            ["📋 Quality Report", "PDF"],
            ["🚚 Supplier Scorecard", "PDF"],
            ["📁 Project Status", "CSV"],
            ["📉 Defect Analysis", "PDF"],
          ].map(([name, fmt]) => (
            <button
              key={name}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                background: "#141b2a",
                border: "1px solid #2a3347",
                color: "#d1d9e6",
                padding: "10px 14px",
                borderRadius: 8,
                cursor: "pointer",
                marginBottom: 8,
                fontSize: 13,
              }}
            >
              <span>{name}</span>
              <span style={{ background: "#2a3347", color: "#7c8ba1", padding: "1px 8px", borderRadius: 4, fontSize: 11 }}>{fmt}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

