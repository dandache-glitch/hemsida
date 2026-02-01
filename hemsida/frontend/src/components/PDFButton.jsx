export default function PDFButton() {
  const downloadPDF = () => {
    window.open("http://localhost:3001/api/pdf/export", "_blank");
  };

  return (
    <button
      onClick={downloadPDF}
      style={{
        padding: "10px 16px",
        backgroundColor: "#2563eb",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer"
      }}
    >
      Ladda ner compliance‑rapport (PDF)
    </button>
  );
}
