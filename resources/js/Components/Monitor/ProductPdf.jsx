import { jsPDF } from 'jspdf';

const productPDF = ({ data }) => {
  const doc = new jsPDF();

  doc.text(`No: ${data.produk.no}`, 10, 20);
  doc.text(`Description: ${data.produk.name}`, 10, 30);
  doc.text(`Tanggal pesan: ${data.tanggalPesan.tanggal_pesan}`, 10, 40);
  doc.text(`Tengat Waktu: ${data.tengat.tengat_waktu}`, 10, 50);

  // Add more data as needed

  // Table headers
  doc.text('Number', 10, 60);
  doc.text('Process', 40, 60);
  doc.text('Estimasi', 80, 60);
  doc.text('Wait', 120, 60);


  let yPos = 70;

  // Table content
  for (let i = 1; i <= 15; i++) {
    const processKey = `process${i}`;
    const estimasiKey = `estimasi${i}`;
    const waitKey = `wait${i}`;

    // Cek apakah proses kosong
    const isProcessEmpty = !data.produk[processKey];

    if (!isProcessEmpty) {

        // Tambahkan garis tepi pada setiap sel
        doc.rect(10, yPos - 5, 30, 10); // Number
        doc.rect(40, yPos - 5, 40, 10); // Process
        doc.rect(80, yPos - 5, 40, 10); // Estimasi
        doc.rect(120, yPos - 5, 30, 10); // Wait

        doc.text(i.toString(), 10, yPos);
        doc.text(data.produk[processKey] || '-', 40, yPos);
        doc.text(data.produk[estimasiKey]?.toString() || '-', 80, yPos);
        doc.text(data.produk[waitKey]?.toString() || '-', 120, yPos);

      yPos += 10;
    }
  }

  const string = doc.output('datauristring');
  const embed = "<embed width='100%' height='100%' src='" + string + "'/>"
  const x = window.open();
  x.document.open();
  x.document.write(embed);
  x.document.close();
};

export default productPDF;
