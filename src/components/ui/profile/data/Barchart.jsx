import React from 'react';
import { Bar ,} from 'react-chartjs-2';

const UserBarChart = () => {
  // Sample data for the chart
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Example Dataset',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
      },
    ],
  };

  return (
    <div className=" h-[600px]">
      <Bar data={data} />
    </div>
  );
};

export default UserBarChart;
