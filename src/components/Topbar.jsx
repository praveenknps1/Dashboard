
import { ROLES, notifications } from "../data/dummyData";

export default function Topbar({ role, search, setSearch, notifOpen, setNotifOpen, setRole }) {
  return (
    <div
      style={{
        background: "#141b2a",
        borderBottom: "1px solid #1e2a3a",
        padding: "12px 28px",
        display: "flex",
        alignItems: "center",
        gap: 16,
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          background: "#1e2433",
          border: "1px solid #2a3347",
          borderRadius: 8,
          padding: "7px 14px",
          gap: 8,
          maxWidth: 420,
        }}
      >
        <span style={{ color: "#4a5568" }}>🔍</span>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search projects, docs, issues, suppliers…"
          style={{
            background: "none",
            border: "none",
            color: "#d1d9e6",
            outline: "none",
            flex: 1,
            fontSize: 13,
          }}
        />
      </div>

      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ position: "relative" }}>
          <button
            onClick={() => setNotifOpen(!notifOpen)}
            style={{
              background: "#1e2433",
              border: "1px solid #2a3347",
              borderRadius: 8,
              padding: "7px 12px",
              cursor: "pointer",
              color: "#7c8ba1",
              fontSize: 18,
              position: "relative",
            }}
          >
            🔔
            <span
              style={{
                position: "absolute",
                top: 4,
                right: 4,
                width: 8,
                height: 8,
                background: "#ef4444",
                borderRadius: "50%",
                border: "2px solid #141b2a",
              }}
            />
          </button>

          {notifOpen && (
            <div
              style={{
                position: "absolute",
                right: 0,
                top: "calc(100% + 8px)",
                width: 320,
                background: "#1e2433",
                border: "1px solid #2a3347",
                borderRadius: 12,
                boxShadow: "0 16px 40px #00000055",
                zIndex: 100,
              }}
            >
              <div style={{ padding: "14px 16px", borderBottom: "1px solid #2a3347", color: "#f1f5f9", fontWeight: 700, fontSize: 14 }}>
                Notifications
              </div>
              {notifications.map((n) => (
                <div key={n.id} style={{ padding: "12px 16px", borderBottom: "1px solid #1a2133", display: "flex", gap: 10 }}>
                  <span style={{ fontSize: 16 }}>
                    {n.type === "error" ? "🚨" : n.type === "warning" ? "⚠️" : n.type === "success" ? "✅" : "ℹ️"}
                  </span>
                  <div>
                    <div style={{ color: "#d1d9e6", fontSize: 12 }}>{n.message}</div>
                    <div style={{ color: "#4a5568", fontSize: 11, marginTop: 3 }}>{n.time}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{
            background: "#1e2433",
            border: "1px solid #2a3347",
            borderRadius: 8,
            padding: "7px 12px",
            color: "#94a3b8",
            fontSize: 12,
            outline: "none",
            cursor: "pointer",
          }}
        >
          {ROLES.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

