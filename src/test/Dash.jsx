import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import { Bar } from 'react-chartjs-2';

const Dashboard = () => {
  const [pickupStats, setPickupStats] = useState({});

  useEffect(() => {
    fetchPickupStats();
    fetchPickupStatss();
  }, []);

  const fetchPickupStats = async () => {
    try {
      const response = await axios.get('/adminside/dash');
      const data = response.data;
      setPickupStats(data);
    } catch (error) {
      console.error('Error fetching pickup stats:', error);
    }
  };
  const chartData = {
    labels: ['Monthly', 'Daily', 'Yearly'],
    datasets: [
      {
        label: 'Pickup Count',
        data: [
          pickupStats.monthly_pickups,
          pickupStats.daily_pickups,
          pickupStats.yearly_pickups
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const fetchPickupStatss = async () => {
    try {
      const response = await axios.get('/adminside/pickup-stats/');
      const data = response.data;
      setPickupStats(data);
    } catch (error) {
      console.error('Error fetching pickup stats:', error);
    }
  };

  const monthlyData = Array(12).fill(0);

  Object.keys(pickupStats).forEach((month) => {
    const monthNumber = parseInt(month);
    const monthIndex = monthNumber - 1;
    monthlyData[monthIndex] = pickupStats[month];
  });

  const monthLabels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const chartDataa = {
    labels: monthLabels,
    datasets: [
      {
        label: 'Yearly Pickups',
        data: monthlyData,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <h1>Monthly Pickups: {pickupStats.monthly_pickups}</h1>
      <h1>Daily Pickups: {pickupStats.daily_pickups}</h1>
      <h1>Yearly Pickups: {pickupStats.yearly_pickups}</h1>
      {/* Additional components and UI elements for the dashboard */}

      <div className='w-[100px] h-[100px]'>
      <h1>Pickup Statistics</h1>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
      {/* Additional components and UI elements for the dashboard */}
    </div>

    <div className='w-[600px] h-[600px]'>

      <h1>Yearly Pickup Statistics</h1>
      <Bar
        data={chartDataa}
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
      {/* Additional components and UI elements for the dashboard */}
    </div>
    </div>
  );
};

export default Dashboard;
