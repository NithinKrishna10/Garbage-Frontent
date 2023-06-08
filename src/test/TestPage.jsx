import React, { Fragment, useState } from 'react';
import Sidebar from './Sidebar';
import UserTable from '../components/dashboard/tables/UserTable';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer'
import BlogList from '../components/ui/blog/BlogList';

import BlogDetailsPage from '../components/ui/blog/BlogContent';
import Dashboard from './Dash';
import DailyPickupGraph from './PickupGraph';
import PieChart from './Pie';
import PickupTypeDistribution from './pm'
// import PickupTypeByMonth from './pm';
const TestPage = () => {


    return (
    <Fragment>
      <Navbar/>
{/* <BlogList/> */}
{/* <BlogDetailsPage/>
      <Footer/> */}
      {/* <Dashboard/>
      <DailyPickupGraph/>
      <PieChart/> */}
      {/* <PickupTypeByMonth/> */}
      <PickupTypeDistribution/>
    </Fragment>
    

    );
}

export default TestPage;
