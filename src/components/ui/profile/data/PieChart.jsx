import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChartComponent = () => {
  // Sample data for the chart
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [10, 20, 30],
        backgroundColor: ['red', 'blue', 'yellow'],
        hoverBackgroundColor: ['darkred', 'darkblue', 'darkyellow'],
      },
    ],
  };
  
  return (
    <div className="w-64">
      <Pie data={data} />
    </div>
  );
};

export default PieChartComponent;

