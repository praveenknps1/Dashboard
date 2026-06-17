# Refactor Plan (App.jsx -> folders)

## Step 1: Gather & confirm structure
- [x] Confirm that current `src/App.jsx` contains all UI + dummy data.
- [x] Choose split scope: **split all modules into `src/pages/*`**, and keep `App.jsx` as app shell.

## Step 2: Create data module
- [ ] Move all dummy arrays/constants from `App.jsx` into `src/data/dummyData.js`.

## Step 3: Create shared UI components
- [ ] Add `src/components/Sidebar.jsx`
- [ ] Add `src/components/Topbar.jsx`
- [ ] Add `src/components/StatCard.jsx` (KpiCard)
- [ ] Add `src/components/ProjectsTable.jsx` (Table/Td + projects listing)
- [ ] Add `src/components/StatusPieChart.jsx`
- [ ] Add `src/components/ProductionChart.jsx`
- [ ] Add any shared helpers needed by pages (StatusBadge, ChartCard, Table, Td, SectionHeader, etc.)

## Step 4: Create pages
- [ ] Add `src/pages/Dashboard.jsx`
- [ ] Add `src/pages/Projects.jsx`
- [ ] Add `src/pages/Production.jsx`
- [ ] Add `src/pages/Quality.jsx`
- [ ] Add `src/pages/SupplyChain.jsx`
- [ ] Add `src/pages/AfterSales.jsx`
- [ ] Add `src/pages/Documents.jsx`
- [ ] Add `src/pages/Analytics.jsx`

## Step 5: Rewrite App.jsx (app shell)
- [ ] Keep login screen + sidebar/topbar layout
- [ ] Replace module switch with page components imports
- [ ] Wire search/role/notifications state into Topbar/Sidebar

## Step 6: Validate
- [ ] Run `npm run dev` and ensure no console errors
- [ ] Run `npm run build` (optional) to confirm production build

