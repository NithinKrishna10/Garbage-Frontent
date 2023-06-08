import React from 'react';
import TopCards from './dash/TopCard';

import BarChart from './dash/Bar';
import AdminRecentPickups from './dash/RecentPickups';

const Dashboard = () => {
    return (
    
  <>
  <TopCards/>
  <div className='flex space-x-4'>
    
<BarChart/>
  <AdminRecentPickups/>
  </div>
  </>
    );
}

export default Dashboard;
