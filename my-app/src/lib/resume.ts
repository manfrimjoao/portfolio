'use client';
import jsPDF from 'jspdf';

function blobToDataURL(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

export async function downloadResume() {
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  const margin = 40;
  const yStart = margin;

  try {
    const res = await fetch('/profile.png');
    const dataUrl = await blobToDataURL(await res.blob());
    doc.addImage(dataUrl, 'PNG', margin, yStart, 100, 100);
  } catch {
    // ignore image if it fails to load
  }

  doc.setTextColor(0);
  doc.setFontSize(18);
  doc.text('João Manfrim', margin, yStart + 120);

  doc.setFontSize(12);
  doc.text('Email: jvmanfrim88@gmail.com', margin, yStart + 140);
  doc.text('LinkedIn: linkedin.com/in/manfrimjoao', margin, yStart + 155);

  doc.setFontSize(14);
  doc.text('Experiência', margin, yStart + 190);
  doc.setFontSize(12);
  doc.text('- Desenvolvedor React e Node.js', margin + 20, yStart + 210);

  doc.save('Joao_Manfrim_CV.pdf');
}
