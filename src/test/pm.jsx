// import React, { useEffect, useState } from 'react';
// import axios from '../utils/axios';
// import { Bar } from 'react-chartjs-2';

// const PickupTypeByMonth = () => {
//   const [chartData, setChartData] = useState({});

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('/api/pickup_type_by_month/');
//       console.log(response.data);
//       const { labels, datasets } = response.data;
//       if (datasets && datasets.length > 0) {
//         setChartData({
//           labels: labels,
//           datasets: datasets.map((dataset, index) => ({
//             label: dataset.label,
//             data: dataset.data,
//             backgroundColor: `rgba(75,192,192,${(index + 1) / datasets.length})`
//           }))
//         });
//       } else {
//         setChartData({});
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h2>Pickup Type by Month</h2>
//       {chartData.labels && chartData.datasets ? (
//         <Bar data={chartData} />
//       ) : (
//         <p>No data available</p>
//       )}
//     </div>
//   );
// };

// export default PickupTypeByMonth;
import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import { Pie } from 'react-chartjs-2';

const PickupTypeDistribution = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/pickup_type_distribution/');
      const { labels, count } = response.data;
      setChartData({
        labels: labels,
        datasets: [{
          data: count,
          backgroundColor: ['rgba(75,192,192,1)', 'rgba(255,0,0,1)']
        }]
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Pickup Type Distribution</h2>
      <Pie data={chartData} />
    </div>
  );
};

export default PickupTypeDistribution;
