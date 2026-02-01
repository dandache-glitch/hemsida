const API_BASE = "http://localhost:3001/api";

export async function fetchReports(companyId) {
  const res = await fetch(`${API_BASE}/reports/${companyId}`);
  return res.json();
}
