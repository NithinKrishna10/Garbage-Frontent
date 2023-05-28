import React from 'react';
import TopCards from './dash/TopCard';
import RecentOrders from './dash/RecentOrders';
import BarChart from './dash/Bar';

const Dashboard = () => {
    return (
    
  <>
  <TopCards/>
  <div className='flex space-x-4'>
    
<BarChart/>
  <RecentOrders/>
  </div>
  </>
    );
}

export default Dashboard;
