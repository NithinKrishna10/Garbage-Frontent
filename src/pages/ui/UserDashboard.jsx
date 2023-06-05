import React from 'react'
import UserBarChart from '../../components/ui/profile/data/Barchart'
import LineChart from '../../components/ui/profile/data/LineChart'

const UserDashboard = () => {
  return (
    <div className='flex'>
      <UserBarChart/>
      {/* <LineChart/> */}
    </div>
  )
}

export default UserDashboard
