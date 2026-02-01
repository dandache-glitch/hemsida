import { logout } from "../services/api";
import PDFButton from "../components/PDFButton";
import ReportHistory from "../components/ReportHistory";

export default function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <button onClick={logout}>Logga ut</button>

      <h1>Dashboard</h1>

      <PDFButton />
      <ReportHistory />
    </div>
  );
}
