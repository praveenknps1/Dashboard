// Centralized dummy data + shared constants

export const ROLES = ["Admin", "Manager", "Engineer", "Customer"];

export const projects = [
  { id: "PRJ-001", name: "EV Battery Module X4", owner: "Sarah Chen", site: "Plant A – Detroit", stage: "NPI", progress: 78, status: "On Track", priority: "High", startDate: "2024-01-10", endDate: "2025-06-30", customer: "AutoCorp" },
  { id: "PRJ-002", name: "Hydraulic Actuator V2", owner: "Raj Patel", site: "Plant B – Austin", stage: "Prototype", progress: 45, status: "Risk", priority: "Medium", startDate: "2024-03-01", endDate: "2025-09-15", customer: "IndusTech" },
  { id: "PRJ-003", name: "Smart Sensor Array", owner: "Mike Torres", site: "Plant C – Seoul", stage: "R&D", progress: 22, status: "On Track", priority: "Low", startDate: "2024-06-01", endDate: "2026-02-28", customer: "SensorPro" },
  { id: "PRJ-004", name: "Composite Frame CF9", owner: "Emma Liu", site: "Plant A – Detroit", stage: "Production", progress: 92, status: "Delayed", priority: "High", startDate: "2023-11-01", endDate: "2025-03-31", customer: "AeroFrame" },
  { id: "PRJ-005", name: "Cooling System Unit", owner: "James Park", site: "Plant D – Munich", stage: "NPI", progress: 61, status: "On Track", priority: "Medium", startDate: "2024-02-15", endDate: "2025-08-01", customer: "ThermalX" },
  { id: "PRJ-006", name: "Power Electronics PCB", owner: "Lena Müller", site: "Plant B – Austin", stage: "Prototype", progress: 37, status: "Risk", priority: "High", startDate: "2024-05-01", endDate: "2025-12-01", customer: "ElectraDrive" },
];

export const milestones = [
  { id: 1, project: "PRJ-001", name: "Design Freeze", date: "2024-08-15", status: "Complete" },
  { id: 2, project: "PRJ-001", name: "Proto Build", date: "2024-11-01", status: "Complete" },
  { id: 3, project: "PRJ-001", name: "NPI Gate Review", date: "2025-02-01", status: "In Progress" },
  { id: 4, project: "PRJ-001", name: "SOP Launch", date: "2025-06-30", status: "Pending" },
  { id: 5, project: "PRJ-002", name: "Concept Approval", date: "2024-05-01", status: "Complete" },
  { id: 6, project: "PRJ-002", name: "Proto Build", date: "2025-01-15", status: "In Progress" },
];

export const productionLines = [
  { line: "Line 1", shift: "Morning", planned: 1200, actual: 1150, yield: 95.8, rework: 24, efficiency: 95.8 },
  { line: "Line 2", shift: "Morning", planned: 900, actual: 870, yield: 96.7, rework: 12, efficiency: 96.7 },
  { line: "Line 3", shift: "Afternoon", planned: 1100, actual: 980, yield: 89.1, rework: 45, efficiency: 89.1 },
  { line: "Line 4", shift: "Afternoon", planned: 800, actual: 820, yield: 102.5, rework: 8, efficiency: 100 },
  { line: "Line 5", shift: "Night", planned: 600, actual: 540, yield: 90.0, rework: 31, efficiency: 90.0 },
  { line: "Line 6", shift: "Night", planned: 700, actual: 695, yield: 99.3, rework: 5, efficiency: 99.3 },
];

export const productionTrend = [
  { month: "Sep", planned: 42000, actual: 39800, efficiency: 94.8 },
  { month: "Oct", planned: 44000, actual: 43200, efficiency: 98.2 },
  { month: "Nov", planned: 43000, actual: 40100, efficiency: 93.3 },
  { month: "Dec", planned: 38000, actual: 36900, efficiency: 97.1 },
  { month: "Jan", planned: 45000, actual: 44100, efficiency: 98.0 },
  { month: "Feb", planned: 47000, actual: 45500, efficiency: 96.8 },
];

export const qualityIssues = [
  { id: "NCR-0091", problem: "Weld porosity on Frame CF9", rootCause: "Gas flow rate deviation", status: "Open", owner: "Emma Liu", date: "2025-02-01", severity: "High" },
  { id: "NCR-0092", problem: "Incorrect torque on PCB mounts", rootCause: "Calibration drift", status: "In Progress", owner: "Raj Patel", date: "2025-02-05", severity: "Medium" },
  { id: "NCR-0093", problem: "Sensor offset out of spec", rootCause: "Supplier part variation", status: "Closed", owner: "Mike Torres", date: "2025-01-20", severity: "Low" },
  { id: "NCR-0094", problem: "Coating adhesion failure", rootCause: "Surface prep skip", status: "Open", owner: "Sarah Chen", date: "2025-02-10", severity: "High" },
  { id: "NCR-0095", problem: "Dimensional deviation X-axis", rootCause: "Tool wear", status: "In Progress", owner: "James Park", date: "2025-02-12", severity: "Medium" },
];

export const defectData = [
  { name: "Dimensional", count: 34 },
  { name: "Surface", count: 28 },
  { name: "Assembly", count: 19 },
  { name: "Electrical", count: 15 },
  { name: "Weld", count: 12 },
  { name: "Other", count: 7 },
];

export const auditData = [
  { month: "Sep", score: 87 },
  { month: "Oct", score: 91 },
  { month: "Nov", score: 89 },
  { month: "Dec", score: 93 },
  { month: "Jan", score: 95 },
  { month: "Feb", score: 94 },
];

export const suppliers = [
  { id: "SUP-001", name: "MetalParts Co.", po: "PO-4421", status: "On Time", leadTime: "14 days", score: 94, country: "USA" },
  { id: "SUP-002", name: "ElectraComp", po: "PO-4422", status: "Delayed", leadTime: "21 days", score: 72, country: "Taiwan" },
  { id: "SUP-003", name: "PrecisionCast", po: "PO-4423", status: "On Time", leadTime: "10 days", score: 98, country: "Germany" },
  { id: "SUP-004", name: "FastenerWorld", po: "PO-4424", status: "At Risk", leadTime: "18 days", score: 81, country: "China" },
  { id: "SUP-005", name: "ChemCoat Ltd.", po: "PO-4425", status: "On Time", leadTime: "7 days", score: 96, country: "UK" },
];

export const inventory = [
  { item: "Steel Sheet 3mm", stock: 4200, location: "Warehouse A", min: 1000, max: 6000, unit: "kg" },
  { item: "Copper Wire 2AWG", stock: 850, location: "Warehouse B", min: 500, max: 2000, unit: "m" },
  { item: "PCB Substrate", stock: 120, location: "Cleanroom 1", min: 200, max: 800, unit: "pcs" },
  { item: "Hydraulic Fluid", stock: 3100, location: "Chemical Store", min: 1000, max: 5000, unit: "L" },
  { item: "Aluminum Extrusion", stock: 780, location: "Warehouse A", min: 300, max: 1500, unit: "pcs" },
];

export const rmas = [
  { id: "RMA-0041", product: "EV Battery X4", issue: "Cell voltage imbalance", status: "Open", technician: "Carlos R.", customer: "AutoCorp", warranty: "In Warranty", date: "2025-02-08" },
  { id: "RMA-0042", product: "Hydraulic Actuator V2", issue: "Seal leak", status: "Repair", technician: "Nina W.", customer: "IndusTech", warranty: "In Warranty", date: "2025-02-03" },
  { id: "RMA-0043", product: "Sensor Array Gen1", issue: "Calibration drift", status: "Complete", technician: "Tom B.", customer: "SensorPro", warranty: "Out of Warranty", date: "2025-01-28" },
  { id: "RMA-0044", product: "Composite Frame CF8", issue: "Surface delamination", status: "Assessment", technician: "Sarah Chen", customer: "AeroFrame", warranty: "In Warranty", date: "2025-02-11" },
  { id: "RMA-0045", product: "Cooling Unit v1", issue: "Fan bearing noise", status: "Repair", technician: "James Park", customer: "ThermalX", warranty: "In Warranty", date: "2025-02-09" },
];

export const documents = [
  { id: "DOC-001", name: "Battery X4 Design Spec", type: "Specification", project: "PRJ-001", version: "v3.2", status: "Approved", date: "2024-12-15", size: "4.2 MB" },
  { id: "DOC-002", name: "Actuator BOM Rev B", type: "BOM", project: "PRJ-002", version: "v1.1", status: "In Review", date: "2025-01-10", size: "1.1 MB" },
  { id: "DOC-003", name: "ISO 9001 Certificate", type: "Compliance", project: "All", version: "v1.0", status: "Approved", date: "2024-11-01", size: "0.8 MB" },
  { id: "DOC-004", name: "CF9 Test Report Q4", type: "Test Report", project: "PRJ-004", version: "v2.0", status: "Approved", date: "2025-01-25", size: "6.7 MB" },
  { id: "DOC-005", name: "Sensor Proto Drawing", type: "CAD", project: "PRJ-003", version: "v0.9", status: "Draft", date: "2025-02-01", size: "12.4 MB" },
  { id: "DOC-006", name: "Supplier Audit Report", type: "Audit", project: "All", version: "v1.0", status: "Approved", date: "2025-02-05", size: "2.3 MB" },
];

export const analyticsOTD = [
  { month: "Sep", rate: 88 },
  { month: "Oct", rate: 91 },
  { month: "Nov", rate: 86 },
  { month: "Dec", rate: 93 },
  { month: "Jan", rate: 95 },
  { month: "Feb", rate: 92 },
];

export const supplierRadar = [
  { subject: "Quality", A: 92 },
  { subject: "Delivery", A: 85 },
  { subject: "Cost", A: 78 },
  { subject: "Flexibility", A: 88 },
  { subject: "Communication", A: 95 },
  { subject: "Risk", A: 80 },
];

export const notifications = [
  { id: 1, type: "warning", message: "PRJ-004 is 8 days behind schedule", time: "2h ago" },
  { id: 2, type: "error", message: "NCR-0094 coating failure requires immediate CAPA", time: "3h ago" },
  { id: 3, type: "info", message: "ElectraComp PO-4422 shipment delayed by 5 days", time: "5h ago" },
  { id: 4, type: "warning", message: "PCB Substrate inventory below minimum level", time: "6h ago" },
  { id: 5, type: "success", message: "RMA-0043 repair completed successfully", time: "1d ago" },
];

