import React, { Fragment, useEffect, useState } from "react";
import ProfileSidebar from "../../components/ui/profile/ProfileSidebar";
// import ProfileDetails from "../../components/ui/profile/ProfileDeatils";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import ProfileDetails from "../../components/ui/profile/ProfileDetails";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../../components/ui/Navbar";
import Cookies from "js-cookie";
import axios from "../../utils/axios";
import { verifyToken } from "../../utils/Constant";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../redux/usernameSlice";
const ProfilePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };
  console.log(sidebarOpen);
  useEffect(() => {
    const token = Cookies.get("jwt");
    if (!token) {

      navigate('/login')
    } else {
      axios
        .get(verifyToken, {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((response) => {
          console.log(response);
          // setUserState(response.data.user)1n
          dispatch(setUserDetails(response.data.user));
        });
    }
  },[]);

  
  return (
    <Fragment>
      

<Navbar/>





      <div className='flex h-[90dvh] '>
  {/* <Sidebar sidebarOpen={sidebarOpen} /> */}
  <ProfileSidebar status={sidebarOpen} />
  
  <div className='overflow-y-scroll max-h-[100%] h-[100%] flex-1 bg-gray-50'>
    
    <div className='fixed bg-white- ml-10 mr-10 mt-10 mb-5  justify-items-center rounded-2xl'>

  
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
    <Outlet />
    
  </div>
</div>
    </Fragment>

    
  );
};

export default ProfilePage;
