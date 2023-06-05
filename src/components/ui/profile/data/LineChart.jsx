import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  // Sample data for the chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Example Dataset',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.4,
      },
    ],
  };

  // Configuration options for the chart
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
