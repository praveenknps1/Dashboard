export const statusColor = (s) => {
  const map = {
    "On Track": "#10b981",
    Risk: "#f59e0b",
    Delayed: "#ef4444",
    Open: "#ef4444",
    "In Progress": "#3b82f6",
    Closed: "#10b981",
    Complete: "#10b981",
    Pending: "#94a3b8",
    "On Time": "#10b981",
    "At Risk": "#f59e0b",
    Repair: "#3b82f6",
    Assessment: "#8b5cf6",
    Draft: "#94a3b8",
    "In Review": "#f59e0b",
    Approved: "#10b981",
  };

  return map[s] || "#94a3b8";
};

export function StatusBadge({ status }) {
  const color = statusColor(status);
  return (
    <span
      style={{
        background: color + "22",
        color,
        border: `1px solid ${color}44`,
        padding: "2px 10px",
        borderRadius: 20,
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: 0.5,
        whiteSpace: "nowrap",
      }}
    >
      {status}
    </span>
  );
}

