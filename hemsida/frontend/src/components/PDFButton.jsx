import { authFetch } from "../services/api";

export default function PDFButton() {
  const downloadPDF = async () => {
    try {
      const res = await authFetch(
        "http://localhost:3001/api/pdf/export"
      );
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      window.open(url);
    } catch (err) {
      alert("Sessionen har gått ut, logga in igen.");
    }
  };

  return <button onClick={downloadPDF}>Ladda ner PDF</button>;
}
