import React from 'react'
import UserBarChart from '../../components/ui/profile/data/Barchart'
import LineChart from '../../components/ui/profile/data/LineChart'
import RecentOrders from '../../components/dashboard/dash/RecentOrders'
import UserTopCards from '../../components/ui/profile/data/UserTopCards'
import BarChart from '../../components/dashboard/dash/Bar'
import PickupWeightGrowth from '../../components/ui/profile/data/Growth'
import PieChartComponent from '../../components/ui/profile/data/PieChart'
import Tcard from '../../test/Pie'
import UserRecentPickups from '../../components/ui/profile/data/UserRecent'
// import UserRecentPickups from '../../components/dashboard/dash/RecentOrders'

const UserDashboard = () => {
  return (
    <>
    <UserTopCards/>
      {/* <Tcard/> */}
      
    <div className='flex space-x-4'>
    <BarChart/>
    {/* <UserBarChart/> */}
  <UserRecentPickups/>
    {/* <PieChartComponent/> */}
    {/* <PickupWeightGrowth/> */}
  {/* <BarChart/> */}
    </div>
    </>
    // <div className='flex'>
    //   {/* <LineChart/> */}
    // </div>
  )
}

export default UserDashboard
