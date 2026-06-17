import { productionLines } from "../data/dummyData";

import { KpiCard } from "../components/StatCard";
import { SectionHeader, ChartCard, Table, Td } from "../components/BasicUI";
import { StatusBadge } from "../components/StatusBadge";

import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function Production() {
  return (
    <div>
      <SectionHeader title="Production Visibility" sub="Multi-site real-time production monitoring" />
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 24 }}>
        <KpiCard label="Today's Output" value="5,055" sub="units across all lines" color="#3b82f6" icon="📦" />
        <KpiCard label="Planned" value="5,300" sub="units today" color="#7c8ba1" icon="📋" />
        <KpiCard label="Avg Yield" value="94.9%" sub="+1.3% vs yesterday" color="#10b981" icon="📊" />
        <KpiCard label="Total Rework" value="125" sub="units flagged" color="#f59e0b" icon="🔄" />
        <KpiCard label="Downtime" value="1.4h" sub="Machine stops" color="#ef4444" icon="⏸️" />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 16, marginBottom: 16 }}>
        <ChartCard title="Production by Line (Planned vs Actual)">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={productionLines}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3347" />
              <XAxis dataKey="line" tick={{ fill: "#7c8ba1", fontSize: 11 }} />
              <YAxis tick={{ fill: "#7c8ba1", fontSize: 11 }} />
              <Tooltip
                contentStyle={{ background: "#1e2433", border: "1px solid #2a3347", borderRadius: 8, color: "#f1f5f9" }}
              />
              <Legend wrapperStyle={{ color: "#7c8ba1", fontSize: 12 }} />
              <Bar dataKey="planned" fill="#2a3347" radius={[4, 4, 0, 0]} name="Planned" />
              <Bar dataKey="actual" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Actual" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Defect Rate by Line">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={productionLines} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3347" />
              <XAxis type="number" tick={{ fill: "#7c8ba1", fontSize: 11 }} />
              <YAxis dataKey="line" type="category" tick={{ fill: "#7c8ba1", fontSize: 11 }} width={50} />
              <Tooltip
                contentStyle={{ background: "#1e2433", border: "1px solid #2a3347", borderRadius: 8, color: "#f1f5f9" }}
              />
              <Bar dataKey="rework" fill="#ef4444" radius={[0, 4, 4, 0]} name="Rework Units" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div style={{ background: "#1e2433", border: "1px solid #2a3347", borderRadius: 12, padding: 20 }}>
        <div
          style={{
            color: "#94a3b8",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 0.8,
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Line-by-Line Breakdown
        </div>
        <Table
          cols={["Line", "Shift", "Planned", "Actual", "Yield %", "Rework", "Status"]}
          rows={productionLines}
          rowKey="line"
          renderRow={(l) => [
            <Td key="l">{l.line}</Td>,
            <Td key="s">{l.shift}</Td>,
            <Td key="pl">{l.planned.toLocaleString()}</Td>,
            <Td key="ac">{l.actual.toLocaleString()}</Td>,
            <Td key="y">
              <span style={{ color: l.yield < 92 ? "#ef4444" : l.yield > 98 ? "#10b981" : "#f59e0b", fontWeight: 700 }}>
                {l.yield}%
              </span>
            </Td>,
            <Td key="r">{l.rework}</Td>,
            <td key="st" style={{ padding: "11px 14px" }}>
              <StatusBadge status={l.efficiency >= 95 ? "On Track" : l.efficiency >= 90 ? "Risk" : "Delayed"} />
            </td>,
          ]}
        />
      </div>
    </div>
  );
}


