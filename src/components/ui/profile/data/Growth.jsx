import React, { useEffect, useState } from 'react';
import axios from '../../../../utils/axios';
import { Line } from 'react-chartjs-2';

const PickupWeightGrowth = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/pickup_weight_growth/');
      console.log(response.data);
      const { labels, data } = response.data;
      setChartData({
        labels: labels,
        datasets: [
          {
            label: 'Pickup Weight',
            data: data,
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)',
            tension: 0.4
          }
        ]
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Pickup Weight Growth</h2>
      {chartData.labels && chartData.datasets && chartData.datasets[0]?.data ? (
        <Line data={chartData} />
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default PickupWeightGrowth;
