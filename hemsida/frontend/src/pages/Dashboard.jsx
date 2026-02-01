import PDFButton from "../components/PDFButton";
import ReportHistory from "../components/ReportHistory";

export default function Dashboard() {
  const companyId = "demo-ab"; // senare från auth

  return (
    <div>
      <h1>Dashboard</h1>

      <PDFButton />

      <hr />

      <ReportHistory companyId={companyId} />
    </div>
  );
}
