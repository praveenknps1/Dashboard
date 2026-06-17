
import { BarChart, Bar, LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Cell } from "recharts";

import { qualityIssues, defectData, auditData } from "../data/dummyData";
import { KpiCard } from "../components/StatCard";
import { SectionHeader, ChartCard, Table, Td } from "../components/BasicUI";
import { StatusBadge } from "../components/StatusBadge";



const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#06b6d4"];

export default function Quality() {
  return (
    <div>
      <SectionHeader
        title="Quality Management & Compliance"
        sub="NCR tracking, audits, SPC analytics, and ISO compliance"
      />

      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 24 }}>
        <KpiCard label="Open Issues" value={qualityIssues.filter((q) => q.status === "Open").length} color="#ef4444" icon="🚨" />
        <KpiCard label="In Progress" value={qualityIssues.filter((q) => q.status === "In Progress").length} color="#f59e0b" icon="⚙️" />
        <KpiCard label="Resolved" value={qualityIssues.filter((q) => q.status === "Closed").length} color="#10b981" icon="✅" />
        <KpiCard label="Audit Score" value="94.2" sub="ISO 9001 Compliance" color="#8b5cf6" icon="🏅" />
        <KpiCard label="Defect Rate" value="2.1%" sub="-0.4% this month" color="#06b6d4" icon="📉" />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        <ChartCard title="Top Defect Types">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={defectData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3347" />
              <XAxis dataKey="name" tick={{ fill: "#7c8ba1", fontSize: 11 }} />
              <YAxis tick={{ fill: "#7c8ba1", fontSize: 11 }} />
              <Tooltip contentStyle={{ background: "#1e2433", border: "1px solid #2a3347", borderRadius: 8, color: "#f1f5f9" }} />
              <Bar dataKey="count" radius={[4, 4, 0, 0]} name="Count">
                {defectData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Monthly Audit Score Trend">
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={auditData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3347" />
              <XAxis dataKey="month" tick={{ fill: "#7c8ba1", fontSize: 11 }} />
              <YAxis domain={[80, 100]} tick={{ fill: "#7c8ba1", fontSize: 11 }} />
              <Tooltip contentStyle={{ background: "#1e2433", border: "1px solid #2a3347", borderRadius: 8, color: "#f1f5f9" }} />
              <Line type="monotone" dataKey="score" stroke="#10b981" strokeWidth={3} dot={{ fill: "#10b981", r: 5 }} name="Score" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div style={{ background: "#1e2433", border: "1px solid #2a3347", borderRadius: 12, padding: 20 }}>
        <div style={{ color: "#94a3b8", fontSize: 12, fontWeight: 700, letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 16 }}>
          NCR / CAPA Register
        </div>
        <Table
          cols={["Issue ID", "Problem", "Root Cause", "Severity", "Status", "Owner", "Date"]}
          rows={qualityIssues}
          rowKey="id"
          renderRow={(q) => [
            <Td key="id" mono>{q.id}</Td>,
            <Td key="p"><span style={{ color: "#f1f5f9" }}>{q.problem}</span></Td>,
            <Td key="rc">{q.rootCause}</Td>,
            <td key="sv" style={{ padding: "11px 14px" }}>
              <span
                style={{
                  color: q.severity === "High" ? "#ef4444" : q.severity === "Medium" ? "#f59e0b" : "#10b981",
                  fontWeight: 700,
                  fontSize: 12,
                }}
              >
                {q.severity}
              </span>
            </td>,
            <td key="st" style={{ padding: "11px 14px" }}>
              <StatusBadge status={q.status} />
            </td>,
            <Td key="o">{q.owner}</Td>,
            <Td key="d" mono>{q.date}</Td>,
          ]}
        />
      </div>
    </div>
  );
}

