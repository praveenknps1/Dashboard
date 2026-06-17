import React, { useMemo, useState } from "react";
import { documents } from "../data/dummyData";
import { KpiCard } from "../components/StatCard";
import { SectionHeader, Table, Td } from "../components/BasicUI";
import { StatusBadge } from "../components/StatusBadge";

export default function Documents() {
  const [filter, setFilter] = useState("All");

  const types = useMemo(() => ["All", ...new Set(documents.map((d) => d.type))], []);
  const filtered = filter === "All" ? documents : documents.filter((d) => d.type === filter);

  return (
    <div>
      <SectionHeader title="Documents & Collaboration" sub="Version-controlled repository for specs, CAD, reports, and compliance" />

      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 24 }}>
        <KpiCard label="Total Documents" value={documents.length} color="#3b82f6" icon="📄" />
        <KpiCard label="Approved" value={documents.filter((d) => d.status === "Approved").length} color="#10b981" icon="✅" />
        <KpiCard label="In Review" value={documents.filter((d) => d.status === "In Review").length} color="#f59e0b" icon="🔍" />
        <KpiCard label="Drafts" value={documents.filter((d) => d.status === "Draft").length} color="#94a3b8" icon="✏️" />
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
        {types.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            style={{
              background: filter === t ? "#3b82f6" : "#1e2433",
              border: `1px solid ${filter === t ? "#3b82f6" : "#2a3347"}`,
              color: filter === t ? "#fff" : "#94a3b8",
              padding: "6px 14px",
              borderRadius: 20,
              cursor: "pointer",
              fontSize: 12,
              fontWeight: 600,
              transition: "all 0.2s",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      <div style={{ background: "#1e2433", border: "1px solid #2a3347", borderRadius: 12, padding: 20 }}>
        <Table
          cols={["Doc ID", "Name", "Type", "Project", "Version", "Status", "Date", "Size"]}
          rows={filtered}
          rowKey="id"
          renderRow={(d) => [
            <Td key="id" mono>{d.id}</Td>,
            <Td key="n"><span style={{ color: "#f1f5f9", fontWeight: 600 }}>{d.name}</span></Td>,
            <td key="t" style={{ padding: "11px 14px" }}>
              <span style={{ background: "#2a3347", color: "#94a3b8", padding: "2px 8px", borderRadius: 6, fontSize: 11 }}>{d.type}</span>
            </td>,
            <Td key="p">{d.project}</Td>,
            <Td key="v" mono>{d.version}</Td>,
            <td key="st" style={{ padding: "11px 14px" }}>
              <StatusBadge status={d.status} />
            </td>,
            <Td key="d" mono>{d.date}</Td>,
            <Td key="s">{d.size}</Td>,
          ]}
        />
      </div>
    </div>
  );
}

