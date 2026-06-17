
import { AreaChart, Area, Line, CartesianGrid, Tooltip, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { ChartCard } from "./BasicUI";

export default function ProductionChart({ productionTrend }) {
  return (
    <ChartCard title="Production Output Trend (6 Months)">
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={productionTrend}>
          <defs>
            <linearGradient id="pg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#2a3347" />
          <XAxis dataKey="month" tick={{ fill: "#7c8ba1", fontSize: 11 }} />
          <YAxis tick={{ fill: "#7c8ba1", fontSize: 11 }} />
          <Tooltip contentStyle={{ background: "#1e2433", border: "1px solid #2a3347", borderRadius: 8, color: "#f1f5f9" }} />
          <Area type="monotone" dataKey="actual" stroke="#3b82f6" fill="url(#pg)" strokeWidth={2} name="Actual" />
          <Line type="monotone" dataKey="planned" stroke="#f59e0b" strokeWidth={2} strokeDasharray="5 5" dot={false} name="Planned" />
        </AreaChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

