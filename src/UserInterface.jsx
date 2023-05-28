import React, { Fragment } from 'react';
import Navbar from './components/ui/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/ui/Footer';

const UserInterface = () => {
    console.log("errrrrrrr");
    
    return (
      <Fragment>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </Fragment>
    );
}

export default UserInterface;
