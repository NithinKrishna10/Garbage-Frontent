import React, { Fragment } from 'react';
import Navbar from './components/ui/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/ui/Footer';

const UserInterface = () => {
    console.log("errrrrrrr");
    
    return (
      <Fragment>

      {/* <div className='m-0 p-0'> */}

        <Navbar/>
        <Outlet/>


        <Footer/>
     
      {/* </div> */}
      </Fragment>
    );
}

export default UserInterface;
