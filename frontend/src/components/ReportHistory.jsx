import { useEffect, useState } from "react";
import { fetchReports } from "../services/api";

export default function ReportHistory({ companyId }) {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReports(companyId).then(data => {
      setReports(data);
      setLoading(false);
    });
  }, [companyId]);

  if (loading) return <p>Laddar rapporter...</p>;

  if (!reports.length) {
    return <p>Inga rapporter ännu.</p>;
  }

  return (
    <div>
      <h3>Rapport‑historik</h3>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Datum</th>
            <th>CSRD</th>
            <th>Score</th>
            <th>AI‑risk</th>
          </tr>
        </thead>
        <tbody>
          {reports.map(r => (
            <tr key={r.id}>
              <td>{new Date(r.createdAt).toLocaleString()}</td>
              <td>{r.csrdStatus}</td>
              <td>{r.csrdScore}</td>
              <td>{r.aiRiskLevel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
