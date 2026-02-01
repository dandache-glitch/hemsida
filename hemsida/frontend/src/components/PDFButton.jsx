export default function PDFButton() {
  const downloadPDF = () => {
    fetch("http://localhost:3001/api/pdf/export", {
      headers: {
        "x-company-id": localStorage.getItem("companyId"),
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    }).then(res => res.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      });
  };

  return <button onClick={downloadPDF}>Ladda ner PDF</button>;
}
