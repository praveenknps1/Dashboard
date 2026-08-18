
import { rmas } from "../data/dummyData";
import { KpiCard } from "../components/StatCard";
import { SectionHeader, Table, Td } from "../components/BasicUI";
import { StatusBadge } from "../components/StatusBadge";

export default function AfterSales() {
  return (
    <div>
      <SectionHeader title="After-Sales Service" sub="RMA management, warranty claims, and repair tracking" />

      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 24 }}>
        <KpiCard label="Open RMAs" value={rmas.filter((r) => r.status !== "Complete").length} color="#ef4444" icon="📥" />
        <KpiCard label="Completed" value={rmas.filter((r) => r.status === "Complete").length} color="#10b981" icon="✅" />
        <KpiCard label="Warranty Claims" value={rmas.filter((r) => r.warranty === "In Warranty").length} color="#3b82f6" icon="🛡️" />
        <KpiCard label="Avg Repair Time" value="4.2 days" color="#8b5cf6" icon="⏱️" />
      </div>

      <div style={{ background: "#1e2433", border: "1px solid #2a3347", borderRadius: 12, padding: 20 }}>
        <div style={{ color: "#94a3b8", fontSize: 12, fontWeight: 700, letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 16 }}>
          RMA Register
        </div>
        <Table
          cols={["RMA #", "Product", "Issue", "Warranty", "Status", "Technician", "Customer", "Date"]}
          rows={rmas}
          rowKey="id"
          renderRow={(r) => [
            <Td key="id" mono>{r.id}</Td>,
            <Td key="p"><span style={{ color: "#f1f5f9", fontWeight: 600 }}>{r.product}</span></Td>,
            <Td key="is">{r.issue}</Td>,
            <td key="w" style={{ padding: "11px 14px" }}>
              <span style={{ color: r.warranty === "In Warranty" ? "#10b981" : "#ef4444", fontSize: 12, fontWeight: 600 }}>
                {r.warranty}
              </span>
            </td>,
            <td key="st" style={{ padding: "11px 13px" }}>
              <StatusBadge status={r.status} />
            </td>,
            <Td key="tech">{r.technician}</Td>,
            <Td key="cu">{r.customer}</Td>,
            <Td key="d" mono>{r.date}</Td>,
          ]}
        />
      </div>
    </div>
  );
}

