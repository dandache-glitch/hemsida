const PDFDocument = require("pdfkit");

module.exports = function generatePDF(res, data) {
  const doc = new PDFDocument();

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=report.pdf");

  doc.pipe(res);

  doc.fontSize(20).text("EU Compliance Report", { align: "center" });
  doc.moveDown();

  doc.fontSize(14).text("CSRD");
  doc.fontSize(12).text(`Status: ${data.csrd.status}`);
  doc.text(`Score: ${data.csrd.score}`);
  doc.moveDown();

  doc.fontSize(14).text("AI Act");
  doc.fontSize(12).text(`Risk level: ${data.aiAct.riskLevel}`);
  if (data.aiAct.notes?.length) {
    doc.text("Notes:");
    data.aiAct.notes.forEach(n => doc.text(`- ${n}`));
  }

  doc.moveDown();
  doc.fontSize(10).text(`Generated: ${new Date().toISOString()}`);

  doc.end();
};
