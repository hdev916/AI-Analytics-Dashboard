import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

// Generate CSV from data
export function generateCSV(data: any, filename: string) {
  const replacer = (key: string, value: any) => (value === null ? '' : value);
  const header = Object.keys(data.overview);
  const overview = header
    .map(
      (fieldName) =>
        JSON.stringify(fieldName) +
        ',' +
        JSON.stringify(data.overview[fieldName], replacer)
    )
    .join('\n');

  const campaigns = data.campaigns
    .map((campaign: any) => Object.values(campaign).join(','))
    .join('\n');

  const csvContent = `Overview\n${header.join(',')}\n${overview}\n\nCampaigns\n${Object.keys(data.campaigns[0]).join(',')}\n${campaigns}`;

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${filename}-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
}

// Generate PDF from data
export function generatePDF(data: any, filename: string) {
  const doc = new jsPDF();

  // Title
  doc.setFontSize(18);
  doc.text('ADmyBRAND Insights Dashboard Export', 15, 15);
  doc.setFontSize(12);
  doc.text(`Generated: ${new Date().toLocaleString()}`, 15, 22);

  // Overview Table
  doc.setFontSize(14);
  doc.text('Overview Metrics', 15, 30);

  const overviewResult = autoTable(doc, {
    startY: 35,
    head: [['Metric', 'Value', 'Growth']],
    body: [
      ['Revenue', `$${data.overview.revenue.toLocaleString()}`, `${data.overview.growth}%`],
      ['Users', data.overview.users.toLocaleString(), '8.2%'],
      ['Conversions', data.overview.conversions.toLocaleString(), '4.7%'],
      ['Avg. Session', '4m 32s', '-2.1%'],
    ],
  });

  const nextY = (overviewResult as any)?.finalY ?? 50; // fallback if undefined

  // Campaigns Table
  doc.setFontSize(14);
  doc.text('Campaign Performance', 15, nextY + 10);

  autoTable(doc, {
    startY: nextY + 15,
    head: [['Campaign', 'Clicks', 'Cost', 'Conversions', 'ROI']],
    body: data.campaigns.map((campaign: any) => [
      campaign.name,
      campaign.clicks,
      `$${campaign.cost}`,
      campaign.conversions,
      `${((campaign.conversions * 50 - campaign.cost) / campaign.cost * 100).toFixed(1)}%`,
    ]),
  });

  doc.save(`${filename}-${new Date().toISOString().slice(0, 10)}.pdf`);
}
