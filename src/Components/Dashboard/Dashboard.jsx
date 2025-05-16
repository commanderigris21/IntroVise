import React from 'react';
import './Dashboard.css';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';

function Dashboard() {
  const generateRandomPercentage = () => {
    return Math.floor(Math.random() * 41) + 60;
  };

  const handleDownloadReport = () => {
    try {
      const doc = new jsPDF();
      
      // Generate random percentages
      const metrics = {
        'Speech Rate': generateRandomPercentage(),
        'Grammatical correctness': generateRandomPercentage(),
        'Keywords': generateRandomPercentage(),
        'Confidence': generateRandomPercentage(),
        'Filler words': generateRandomPercentage(),
        'Answer Correctness': generateRandomPercentage(),
      };

      const total = Math.floor(
        Object.values(metrics).reduce((sum, value) => sum + value, 0) / Object.keys(metrics).length
      );

      const tableData = Object.entries(metrics).map(([parameter, value]) => [parameter, `${value}%`]);
      tableData.push(['Total', `${total}%`]);

      // Add title
      doc.setFontSize(20);
      doc.text('JobBot Result Report', 105, 15, { align: 'center' });
      
      // Generate table using autoTable directly
      autoTable(doc, {
        startY: 25,
        head: [['Parameters', 'Result']],
        body: tableData,
        theme: 'grid',
        headStyles: {
          fillColor: [66, 139, 202],
          textColor: [255, 255, 255],
          fontSize: 12
        },
        styles: {
          halign: 'center',
          fontSize: 11,
          cellPadding: 3
        },
        columnStyles: {
          0: { cellWidth: 100 },
          1: { cellWidth: 50 }
        },
        margin: { top: 25 }
      });

      doc.save('INTROVISE!_Result_Report.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate report. Please try again.');
    }
  };

  return (
    <div className="img-dash-container">
      <div className="dashboard-container">
        <h1 className="dashboard-header">Great Job! <br />Interview Done.</h1>
        <h3 className="dashboard-download">Download your analysis report from below.</h3>
        <div className="buttons-container">
          <button 
            className="download-button" 
            onClick={handleDownloadReport}
            style={{ cursor: 'pointer' }}
          >
            Download Report
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;


