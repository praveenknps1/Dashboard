import React from "react";
import { suppliers, inventory } from "../data/dummyData";
import { KpiCard } from "../components/StatCard";
import { SectionHeader, Table, Td } from "../components/BasicUI";
import { StatusBadge } from "../components/StatusBadge";

export default function SupplyChain() {
  return (
    <div>
      <SectionHeader
        title="Supply Chain & Materials"
        sub="Supplier performance, inventory levels, and logistics tracking"
      />

      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 24 }}>
        <KpiCard label="Active Suppliers" value={suppliers.length} color="#3b82f6" icon="🤝" />
        <KpiCard label="On-Time Delivery" value="80%" color="#10b981" icon="🚚" />
        <KpiCard label="Delayed POs" value={suppliers.filter((s) => s.status === "Delayed").length} color="#ef4444" icon="📦" />
        <KpiCard label="Low Stock Items" value={inventory.filter((i) => i.stock < i.min * 1.2).length} color="#f59e0b" icon="⚠️" />
      </div>

      <div style={{ background: "#1e2433", border: "1px solid #2a3347", borderRadius: 12, padding: 20, marginBottom: 16 }}>
        <div style={{ color: "#94a3b8", fontSize: 12, fontWeight: 700, letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 16 }}>
          Supplier Status
        </div>
        <Table
          cols={["Supplier ID", "Name", "Country", "PO Number", "Lead Time", "Score", "Status"]}
          rows={suppliers}
          rowKey="id"
          renderRow={(s) => [
            <Td key="id" mono>{s.id}</Td>,
            <Td key="n"><span style={{ color: "#f1f5f9", fontWeight: 600 }}>{s.name}</span></Td>,
            <Td key="c">{s.country}</Td>,
            <Td key="po" mono>{s.po}</Td>,
            <Td key="lt">{s.leadTime}</Td>,
            <td key="sc" style={{ padding: "11px 14px" }}>
              <span
                style={{
                  color: s.score >= 90 ? "#10b981" : s.score >= 80 ? "#f59e0b" : "#ef4444",
                  fontWeight: 800,
                }}
              >
                {s.score}
              </span>
            </td>,
            <td key="st" style={{ padding: "11px 14px" }}>
              <StatusBadge status={s.status} />
            </td>,
          ]}
        />
      </div>

      <div style={{ background: "#1e2433", border: "1px solid #2a3347", borderRadius: 12, padding: 20 }}>
        <div style={{ color: "#94a3b8", fontSize: 12, fontWeight: 700, letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 16 }}>
          Inventory Levels
        </div>
        <Table
          cols={["Item", "Stock", "Unit", "Location", "Min", "Max", "Level"]}
          rows={inventory}
          rowKey="item"
          renderRow={(i) => {
            const pct = Math.min(100, (i.stock / i.max) * 100);
            const color = i.stock < i.min ? "#ef4444" : i.stock < i.min * 1.5 ? "#f59e0b" : "#10b981";
            return [
              <Td key="it"><span style={{ color: "#f1f5f9" }}>{i.item}</span></Td>,
              <Td key="st">{i.stock.toLocaleString()}</Td>,
              <Td key="u">{i.unit}</Td>,
              <Td key="l">{i.location}</Td>,
              <Td key="mn">{i.min.toLocaleString()}</Td>,
              <Td key="mx">{i.max.toLocaleString()}</Td>,
              <td key="bar" style={{ padding: "11px 14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 80, height: 6, background: "#2a3347", borderRadius: 3 }}>
                    <div style={{ width: `${pct}%`, height: 6, background: color, borderRadius: 3 }} />
                  </div>
                  <span style={{ color, fontSize: 11, fontWeight: 700 }}>{Math.round(pct)}%</span>
                </div>
              </td>,
            ];
          }}
        />
      </div>
    </div>
  );
}

