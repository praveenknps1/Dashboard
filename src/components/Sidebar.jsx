

const NAV = [
  { id: "dashboard", label: "Dashboard", icon: "⬛" },
  { id: "projects", label: "Projects", icon: "📁" },
  { id: "production", label: "Production", icon: "🏭" },
  { id: "quality", label: "Quality", icon: "🎯" },
  { id: "supply", label: "Supply Chain", icon: "🚚" },
  { id: "aftersales", label: "After Sales", icon: "🔧" },
  { id: "documents", label: "Documents", icon: "📄" },
  { id: "analytics", label: "Analytics", icon: "📊" },
];

export default function Sidebar({ role, active, onActiveChange, onSignOut }) {
  const visibleNav =
    role === "Customer"
      ? NAV.filter((n) => ["dashboard", "projects", "aftersales"].includes(n.id))
      : role === "Engineer"
        ? NAV.filter((n) => !["analytics"].includes(n.id))
        : NAV;

  return (
    <div
      style={{
        width: 220,
        background: "#141b2a",
        borderRight: "1px solid #1e2a3a",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        position: "sticky",
        top: 0,
        height: "100vh",
      }}
    >
      <div style={{ padding: "24px 20px 20px", borderBottom: "1px solid #1e2a3a" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              background: "#3b82f6",
              width: 32,
              height: 32,
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
            }}
          >
            ⬛
          </div>
          <div>
            <div style={{ color: "#f1f5f9", fontWeight: 900, fontSize: 16, letterSpacing: -0.3 }}>FactoryIQ</div>
            <div style={{ color: "#4a5568", fontSize: 10, letterSpacing: 0.5 }}>MANUFACTURING PORTAL</div>
          </div>
        </div>
      </div>

      <nav style={{ flex: 1, padding: "12px 10px", overflowY: "auto" }}>
        {visibleNav.map((n) => (
          <button
            key={n.id}
            onClick={() => onActiveChange(n.id)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              width: "100%",
              background: active === n.id ? "#3b82f620" : "transparent",
              border: `1px solid ${active === n.id ? "#3b82f640" : "transparent"}`,
              borderRadius: 8,
              padding: "9px 12px",
              cursor: "pointer",
              color: active === n.id ? "#3b82f6" : "#7c8ba1",
              fontSize: 13,
              fontWeight: active === n.id ? 700 : 500,
              marginBottom: 2,
              textAlign: "left",
              transition: "all 0.15s",
            }}
          >
            <span style={{ fontSize: 16 }}>{n.icon}</span>
            {n.label}
          </button>
        ))}
      </nav>

      <div style={{ padding: "16px 12px", borderTop: "1px solid #1e2a3a" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", background: "#1e2433", borderRadius: 10 }}>
          <div
            style={{
              width: 28,
              height: 28,
              background: "#3b82f6",
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 12,
              fontWeight: 800,
            }}
          >
            {role[0]}
          </div>
          <div>
            <div style={{ color: "#f1f5f9", fontSize: 12, fontWeight: 700 }}>{role}</div>
            <button
              onClick={onSignOut}
              style={{
                background: "none",
                border: "none",
                color: "#4a5568",
                fontSize: 11,
                cursor: "pointer",
                padding: 0,
              }}
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

