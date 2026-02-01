const API_BASE = "http://localhost:3001/api";

/* ======================
   LOGOUT
====================== */
export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("companyId");
  window.location.reload();
}

/* ======================
   AUTH FETCH
   - skickar JWT automatiskt
   - loggar ut vid 401 (token utgången)
====================== */
export async function authFetch(url, options = {}) {
  const token = localStorage.getItem("token");

  if (!token) {
    logout();
    throw new Error("No token");
  }

  const res = await fetch(url, {
    ...options,
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
      ...(options.headers || {})
    }
  });

  if (res.status === 401) {
    logout();
    throw new Error("Session expired");
  }

  return res;
}

/* ======================
   AUTH
====================== */
export async function login(email, password) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  return res.json();
}

/* ======================
   REPORTS
====================== */
export async function fetchReports() {
  const res = await authFetch(`${API_BASE}/reports`);
  return res.json();
}

/* ======================
   PDF
====================== */
export async function fetchPDF() {
  const res = await authFetch(`${API_BASE}/pdf/export`);
  return res.blob();
}
