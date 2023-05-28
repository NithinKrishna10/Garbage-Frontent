import React, { useState } from 'react';
import Sidebar from './Sidebar';
import UserTable from '../components/dashboard/tables/UserTable';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const TestPage = () => {
   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const navigate = useNavigate();

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

    return (
        // <div className='flex h-[100dvh]'>
           

        //     <Sidebar sidebarOpen={sidebarOpen}/>
            
        //     <div className='overflow-y-scroll max-h-[100%] h-[100%] flex-1'>
            
        //     <div className='item-end fixed'>
        //     <h1 className="text-2xl font-bold text-white">User Dashboard</h1>
        //     <div onClick={handleSidebarToggle} className="md:hidden ">
        //       {sidebarOpen ? (
        //         <AiOutlineClose size={20} />
        //       ) : (
        //         <AiOutlineMenu size={20} />
        //       )}
        //     </div>
        //     </div>
           
          
        //         <UserTable/>
        //         <UserTable/>
        //     </div>
        // </div>


        <div className='flex h-[100dvh]'>
  <Sidebar sidebarOpen={sidebarOpen} />
  <div className='overflow-y-scroll max-h-[100%] h-[100%] flex-1 '>
    
    <div className='fixed bg-white- ml-10 mr-10 mt-10 mb-5  justify-items-center rounded-2xl'>

    <h1 className="text-2xl font-bold text-white">User Dashboard</h1>
    <div className="lg:hidden absolute top-0 right-0">
      <div onClick={handleSidebarToggle}>
        {sidebarOpen ? (
            <AiOutlineClose size={20} />
            ) : (
                <AiOutlineMenu size={20} />
                )}
      </div>
                </div>
    </div>
    <UserTable />
    <UserTable />
    
  </div>
</div>

    );
}

export default TestPage;
