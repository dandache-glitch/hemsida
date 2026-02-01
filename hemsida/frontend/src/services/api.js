const API_BASE = "http://localhost:3001/api";

export async function login(email, password) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  return res.json();
}

export async function fetchReports(companyId) {
  const res = await fetch(`${API_BASE}/reports/${companyId}`, {
    headers: {
      "x-company-id": localStorage.getItem("companyId"),
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
  });
  return res.json();
}
