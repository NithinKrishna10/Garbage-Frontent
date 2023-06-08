import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import { Bar } from 'react-chartjs-2';

const MonthlyPickupChart = () => {
  const [monthlyData, setMonthlyData] = useState([]);

  useEffect(() => {
    fetchMonthlyData();
  }, []);

  const fetchMonthlyData = async () => {
    try {
      const response = await axios.get('/adminside/monthly-pickups/');
      setMonthlyData(response.data);
    } catch (error) {
      console.error('Error fetching monthly pickup data:', error);
    }
  };

  const months = monthlyData.map((data) => data.pickup_month);
  const counts = monthlyData.map((data) => data.count);

  const chartData = {
    labels: months,
    datasets: [
      {
        label: 'Monthly Pickups',
        data: counts,
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };
 
  return (
    <div className='h-[600px] w-[600px]'>
      <h1>Monthly Pickups Chart</h1>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              precision: 0,
            },
          },
        }}
      />
    </div>
  );
};

export default MonthlyPickupChart;
