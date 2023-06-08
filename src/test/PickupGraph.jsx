import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import { Bar } from 'react-chartjs-2';

const DailyPickupGraph = () => {
  const [dailyPickups, setDailyPickups] = useState([]);

  useEffect(() => {
    fetchDailyPickups();
  }, []);

  const fetchDailyPickups = async () => {
    try {
        const response = await axios.get('/adminside/daily-pickups/');
      const data = response.data;
      setDailyPickups(data);
    } catch (error) {
      console.error('Error fetching daily pickups:', error);
    }
  };

  const dates = dailyPickups.map((pickup) => pickup.pickup_date);
  const weights = dailyPickups.map((pickup) => pickup.weight);

  const chartData = {
    labels: dates,
    datasets: [
      {
        label: 'Daily Pickups Weight',
        data: weights,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  }; 

  return (
    <div className='h-[600px] w-[600px]'>
      <h1>Daily Pickups Weight Graph</h1>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              precision: 2,
            },
          },
        }}
      />
    </div>
  );
};

export default DailyPickupGraph;
