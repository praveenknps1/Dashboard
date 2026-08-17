export const SectionHeader = ({ title, sub }) => (
  <div style={{ marginBottom: 20 }}>

    <h2 style={{ color: "#f1f5f9", fontSize: 20, fontWeight: 800, margin: 0 }}>{title}</h2>
    {sub && <p style={{ color: "#7c8ba1", fontSize: 13, margin: "4px 0 0" }}>{sub}</p>}
  </div>
);

export const Table = ({ cols, rows, rowKey, renderRow }) => (
  <div style={{ overflowX: "auto" }}>
    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
      <thead>
        <tr>
          {cols.map((c) => (
            <th
              key={c}
              style={{
                padding: "10px 14px",
                textAlign: "left",
                color: "#7c8ba1",
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: 0.8,
                textTransform: "uppercase",
                borderBottom: "1px solid #2a3347",
                whiteSpace: "nowrap",
              }}
            >
              {c}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={rowKey ? r[rowKey] : i} style={{ borderBottom: "1px solid #1a2133" }}>
            {renderRow(r)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const Td = ({ children, mono }) => (
  <td
    style={{
      padding: "11px 14px",
      color: mono ? "#94a3b8" : "#d1d9e6",
      fontFamily: mono ? "monospace" : "inherit",
      fontSize: mono ? 12 : 13,
    }}
  >
    {children}
  </td>
);

export const ChartCard = ({ title, children, style }) => (
  <div
    style={{
      background: "#1e2433",
      border: "1px solid #2a3347",
      borderRadius: 12,
      padding: "18px 20px",
      width: "100%",
      minWidth: 0,
      overflow: "hidden",
      ...style,
    }}
  >
    <div
      style={{
        color: "#94a3b8",
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: 0.8,
        textTransform: "uppercase",
        marginBottom: 14,
      }}
    >
      {title}
    </div>
    {children}
  </div>
);


