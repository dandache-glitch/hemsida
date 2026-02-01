const API_BASE = "http://localhost:3001/api";

function getAuthHeaders() {
  const token = localStorage.getItem("token");
  if (!token) return null;

  return {
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json"
  };
}

export async function authFetch(url, options = {}) {
  const headers = getAuthHeaders();

  if (!headers) {
    logout();
    throw new Error("Not authenticated");
  }

  const res = await fetch(url, {
    ...options,
    headers: {
      ...headers,
      ...(options.headers || {})
    }
  });

  if (res.status === 401) {
    logout();
    throw new Error("Session expired");
  }

  return res;
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("companyId");
  window.location.reload();
}
