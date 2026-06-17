

export const KpiCard = ({ label, value, sub, color = "#3b82f6", icon }) => (
  <div
    style={{
      background: "#1e2433",
      border: "1px solid #2a3347",
      borderRadius: 12,
      padding: "20px 22px",
      flex: 1,
      minWidth: 160,
    }}
  >
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
      <div>
        <div
          style={{
            color: "#7c8ba1",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: 1,
            textTransform: "uppercase",
            marginBottom: 6,
          }}
        >
          {label}
        </div>
        <div style={{ color: "#f1f5f9", fontSize: 28, fontWeight: 800, lineHeight: 1 }}>{value}</div>
        {sub && <div style={{ color: "#7c8ba1", fontSize: 12, marginTop: 5 }}>{sub}</div>}
      </div>
      <div
        style={{
          background: color + "22",
          color,
          width: 40,
          height: 40,
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 18,
        }}
      >
        {icon}
      </div>
    </div>
    <div style={{ marginTop: 12, height: 3, background: "#2a3347", borderRadius: 2 }}>
      <div style={{ width: "65%", height: 3, background: color, borderRadius: 2 }} />
    </div>
  </div>
);

