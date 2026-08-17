import { useMemo, useState } from "react";

import "./responsive.css";

import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Production from "./pages/Production";
import Quality from "./pages/Quality";
import SupplyChain from "./pages/SupplyChain";
import AfterSales from "./pages/AfterSales";
import Documents from "./pages/Documents";
import Analytics from "./pages/Analytics";

import { ROLES, notifications } from "./data/dummyData";



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

export default function App() {
  const [active, setActive] = useState("dashboard");
  const [role, setRole] = useState("Manager");
  const [search, setSearch] = useState("");
  const [notifOpen, setNotifOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginRole, setLoginRole] = useState("Manager");
  const [sidebarOpen, setSidebarOpen] = useState(false);


  const renderModule = useMemo(() => {
    if (active === "dashboard") return <Dashboard />;
    if (active === "projects") return <Projects role={role} />;
    if (active === "production") return <Production />;
    if (active === "quality") return <Quality />;
    if (active === "supply") return <SupplyChain />;
    if (active === "aftersales") return <AfterSales />;
    if (active === "documents") return <Documents />;
    if (active === "analytics") return <Analytics />;
    return null;
  }, [active, role]);

  const visibleNav = useMemo(() => {
    if (role === "Customer") return NAV.filter((n) => ["dashboard", "projects", "aftersales"].includes(n.id));
    if (role === "Engineer") return NAV.filter((n) => !["analytics"].includes(n.id));
    return NAV;
  }, [role]);

  if (!loggedIn) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#0f1623",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
        }}
      >
        <div
          style={{
            background: "#1e2433",
            border: "1px solid #2a3347",
            borderRadius: 20,
            padding: 48,
            width: 380,
            boxShadow: "0 24px 60px #00000066",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div style={{ fontSize: 36, marginBottom: 8 }}>⬛</div>
            <div style={{ color: "#f1f5f9", fontSize: 26, fontWeight: 900, letterSpacing: -0.5 }}>
              FactoryIQ
            </div>
            <div style={{ color: "#7c8ba1", fontSize: 13, marginTop: 4 }}>Manufacturing Excellence Portal</div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <label
              style={{
                color: "#7c8ba1",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 0.8,
                textTransform: "uppercase",
                display: "block",
                marginBottom: 6,
              }}
            >
              Email
            </label>
            <div
              style={{
                background: "#141b2a",
                border: "1px solid #2a3347",
                borderRadius: 8,
                padding: "10px 14px",
                color: "#94a3b8",
                fontSize: 13,
              }}
            >
              admin@factoryiq.com
            </div>
          </div>

          <div style={{ marginBottom: 20 }}>
            <label
              style={{
                color: "#7c8ba1",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 0.8,
                textTransform: "uppercase",
                display: "block",
                marginBottom: 6,
              }}
            >
              Role
            </label>
            <select
              value={loginRole}
              onChange={(e) => setLoginRole(e.target.value)}
              style={{
                width: "100%",
                background: "#141b2a",
                border: "1px solid #2a3347",
                borderRadius: 8,
                padding: "10px 14px",
                color: "#f1f5f9",
                fontSize: 13,
                outline: "none",
              }}
            >
              {ROLES.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={() => {
              setRole(loginRole);
              setLoggedIn(true);
            }}
            style={{
              width: "100%",
              background: "#3b82f6",
              border: "none",
              color: "#fff",
              padding: "12px",
              borderRadius: 10,
              cursor: "pointer",
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: 0.3,
            }}
          >
            Sign In →
          </button>
          <div style={{ textAlign: "center", color: "#4a5568", fontSize: 11, marginTop: 16 }}>
            Demo — select any role to explore
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#0f1623",
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
        color: "#d1d9e6",
      }}
    >
      {/* SIDEBAR (desktop) */}
      <div className="desktop-only"
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
              onClick={() => setActive(n.id)}
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 10px",
              background: "#1e2433",
              borderRadius: 10,
            }}
          >
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
                onClick={() => setLoggedIn(false)}
                style={{ background: "none", border: "none", color: "#4a5568", fontSize: 11, cursor: "pointer", padding: 0 }}
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SIDEBAR (mobile drawer) */}
      {sidebarOpen && (
        <>
          <div className="bb-backdrop" onClick={() => setSidebarOpen(false)} />
          <div className="bb-drawer">
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
              <button
                onClick={() => setSidebarOpen(false)}
                style={{
                  marginTop: 16,
                  background: "#2a3347",
                  border: "1px solid #1e2a3a",
                  color: "#94a3b8",
                  padding: "8px 12px",
                  borderRadius: 8,
                  width: "100%",
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                Close
              </button>
            </div>

            <nav style={{ flex: 1, padding: "12px 10px", overflowY: "auto" }}>
              {visibleNav.map((n) => (
                <button
                  key={n.id}
                  onClick={() => {
                    setActive(n.id);
                    setSidebarOpen(false);
                  }}
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 10px",
                  background: "#1e2433",
                  borderRadius: 10,
                }}
              >
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
                    onClick={() => {
                      setLoggedIn(false);
                      setSidebarOpen(false);
                    }}
                    style={{ background: "none", border: "none", color: "#4a5568", fontSize: 11, cursor: "pointer", padding: 0 }}
                  >
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* MAIN */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>

        {/* TOP BAR */}
        <div
          style={{
            background: "#141b2a",
            borderBottom: "1px solid #1e2a3a",
            padding: "12px",
            display: "flex",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
            position: "sticky",
            top: 0,
            zIndex: 10,
          }}
        >
          <button
            className="mobile-only"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open navigation"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 42,
              height: 38,
              borderRadius: 8,
              background: "#1e2433",
              border: "1px solid #2a3347",
              color: "#94a3b8",
              cursor: "pointer",
              fontSize: 18,
            }}
          >
            ☰
          </button>

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
              width: "100%",
              maxWidth: 420,
              minWidth: 0,
            }}
          >
            <span style={{ color: "#4a5568" }}>🔍</span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects, docs, issues, suppliers…"
              style={{ background: "none", border: "none", color: "#d1d9e6", outline: "none", flex: 1, fontSize: 13 }}
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
                    width: "90vw",
                    maxWidth: 320,
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

        {/* CONTENT */}
        <div
          style={{
            flex: 1,
            padding: "28px 32px",
            overflowY: "auto",
          }}
          onClick={() => notifOpen && setNotifOpen(false)}
          className="contentWrap"
        >
          {renderModule}
        </div>




      </div>
    </div>
  );
}

