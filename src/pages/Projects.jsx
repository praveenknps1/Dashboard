import { useState } from "react";

import { milestones, projects } from "../data/dummyData";
import { KpiCard } from "../components/StatCard";
import { ChartCard, SectionHeader, Table, Td } from "../components/BasicUI";
import { StatusBadge, statusColor } from "../components/StatusBadge";

export default function Projects({ role }) {
  const [selected, setSelected] = useState(null);

  if (selected) {
    const proj = projects.find((p) => p.id === selected);
    const pm = milestones.filter((m) => m.project === selected);

    return (
      <div>
        <button
          onClick={() => setSelected(null)}
          style={{
            background: "#2a3347",
            border: "none",
            color: "#94a3b8",
            padding: "8px 16px",
            borderRadius: 8,
            cursor: "pointer",
            marginBottom: 20,
            fontSize: 13,
          }}
        >
          ← Back to Projects
        </button>

        <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 24 }}>
          <div>
            <h2 style={{ color: "#f1f5f9", fontSize: 22, fontWeight: 800, margin: 0 }}>{proj.name}</h2>
            <div style={{ color: "#7c8ba1", fontSize: 13, marginTop: 4 }}>
              {proj.id} · {proj.site} · Owner: {proj.owner}
            </div>
          </div>
          <StatusBadge status={proj.status} />
        </div>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 24 }}>
          <KpiCard label="Stage" value={proj.stage} color="#3b82f6" icon="📍" />
          <KpiCard label="Progress" value={`${proj.progress}%`} color="#10b981" icon="📈" />
          <KpiCard label="Customer" value={proj.customer} color="#8b5cf6" icon="🏢" />
          <KpiCard label="End Date" value={proj.endDate} color="#f59e0b" icon="📅" />
        </div>

        <div
          style={{
            background: "#1e2433",
            border: "1px solid #2a3347",
            borderRadius: 12,
            padding: 20,
            marginBottom: 20,
          }}
        >
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
            Milestones Timeline
          </div>

          <div style={{ display: "flex", gap: 0, overflowX: "auto", paddingBottom: 8 }}>
            {pm.map((m, i) => (
              <div key={m.id} style={{ display: "flex", alignItems: "center", gap: 0 }}>
                <div style={{ textAlign: "center", minWidth: 120 }}>
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: statusColor(m.status),
                      margin: "0 auto 8px",
                      border: "3px solid #0f1623",
                    }}
                  />
                  <div style={{ color: "#f1f5f9", fontSize: 12, fontWeight: 700 }}>{m.name}</div>
                  <div style={{ color: "#7c8ba1", fontSize: 11, marginTop: 2 }}>{m.date}</div>
                  <StatusBadge status={m.status} />
                </div>
                {i < pm.length - 1 && <div style={{ width: 48, height: 2, background: "#2a3347", marginTop: -24 }} />}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div style={{ background: "#1e2433", border: "1px solid #2a3347", borderRadius: 12, padding: 20 }}>
            <div
              style={{
                color: "#94a3b8",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 0.8,
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Engineering BOM (Sample)
            </div>
            {[
              ["Frame Assembly", "AE-001", "12 pcs"],
              ["PCB Controller", "EL-042", "3 pcs"],
              ["Sensor Module", "SE-007", "8 pcs"],
              ["Fastener Kit", "FA-099", "1 set"],
            ].map(([n, id, qty]) => (
              <div key={id} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #1a2133", fontSize: 13 }}>
                <span style={{ color: "#d1d9e6" }}>{n}</span>
                <span style={{ color: "#7c8ba1", fontFamily: "monospace" }}>{id}</span>
                <span style={{ color: "#94a3b8" }}>{qty}</span>
              </div>
            ))}
          </div>

          <div style={{ background: "#1e2433", border: "1px solid #2a3347", borderRadius: 12, padding: 20 }}>
            <div
              style={{
                color: "#94a3b8",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 0.8,
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Change Log
            </div>
            {[
              ["v3.2 – Design Spec updated", "2024-12-15"],
              ["v2.1 – BOM revision B approved", "2024-10-01"],
              ["v1.5 – Prototype test results filed", "2024-08-20"],
            ].map(([msg, date]) => (
              <div key={date} style={{ padding: "8px 0", borderBottom: "1px solid #1a2133" }}>
                <div style={{ color: "#d1d9e6", fontSize: 13 }}>{msg}</div>
                <div style={{ color: "#7c8ba1", fontSize: 11, marginTop: 2 }}>{date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <SectionHeader title="Program & Project Tracking" sub="Full lifecycle from R&D through production launch" />

      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 24 }}>
        <KpiCard label="Total Projects" value={projects.length} color="#3b82f6" icon="📁" />
        <KpiCard label="On Track" value={projects.filter((p) => p.status === "On Track").length} color="#10b981" icon="✅" />
        <KpiCard label="At Risk" value={projects.filter((p) => p.status === "Risk").length} color="#f59e0b" icon="⚡" />
        <KpiCard label="Delayed" value={projects.filter((p) => p.status === "Delayed").length} color="#ef4444" icon="🚨" />
      </div>

      <div style={{ background: "#1e2433", border: "1px solid #2a3347", borderRadius: 12, padding: 20 }}>
        <Table
          cols={["Project ID", "Name", "Owner", "Site", "Stage", "Status", "Progress", ""]}
          rows={role === "Customer" ? projects.filter((p) => p.customer === "AutoCorp") : projects}
          rowKey="id"
          renderRow={(p) => [
            <Td key="id" mono>{p.id}</Td>,
            <Td key="name"><span style={{ color: "#f1f5f9", fontWeight: 600 }}>{p.name}</span></Td>,
            <Td key="owner">{p.owner}</Td>,
            <Td key="site">{p.site}</Td>,
            <Td key="stage"><span style={{ background: "#2a3347", color: "#94a3b8", padding: "2px 8px", borderRadius: 6, fontSize: 11 }}>{p.stage}</span></Td>,
            <Td key="status"><StatusBadge status={p.status} /></Td>,
            <Td
              key="prog"
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 80, height: 6, background: "#2a3347", borderRadius: 3 }}>
                  <div
                    style={{
                      width: `${p.progress}%`,
                      height: 6,
                      background: p.status === "Delayed" ? "#ef4444" : p.status === "Risk" ? "#f59e0b" : "#10b981",
                      borderRadius: 3,
                    }}
                  />
                </div>
                <span style={{ color: "#94a3b8", fontSize: 12 }}>{p.progress}%</span>
              </div>
            </Td>,
            <td key="btn" style={{ padding: "11px 14px" }}>
              <button
                onClick={() => setSelected(p.id)}
                style={{
                  background: "#2a3347",
                  border: "none",
                  color: "#3b82f6",
                  padding: "5px 12px",
                  borderRadius: 6,
                  cursor: "pointer",
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                View →
              </button>
            </td>,
          ]}
        />
      </div>
    </div>
  );
}

