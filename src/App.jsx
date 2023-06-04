import { useState, useEffect, Fragment } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cookies from "js-cookie";
import { setUserDetails } from "./redux/usernameSlice";
import axios from "./utils/axios";
import { useNavigate } from "react-router-dom";
import { verifyToken } from "./utils/Constant";
import { Route, Routes } from "react-router-dom";
import UserInterface from "./UserInterface";
import HomePage from "./pages/ui/HomePage";
import ProfilePage from "./pages/ui/ProfilePage";
import ProfileDetails from "./components/ui/profile/ProfileDetails";
import AddressList from "./components/ui/profile/AddresList";
import ServicesPage from "./pages/ui/ServicesPage";
import RegisterPage from "./pages/ui/RegisterPage";
import LoginPage from "./pages/ui/LoginPage";
import { useDispatch } from "react-redux";
import Admin from "./Admin";
import UserTable from "./components/dashboard/tables/UserTable";
import OrderPage from "./pages/ui/OrderPage";
import OrderDetails from "./components/dashboard/tables/OrderTable";
import OrderUpdate from "./components/dashboard/form/OrderUpdate";
import OrderList from "./components/ui/profile/OrderList";
import TestPage from "./test/TestPage";
import Dashboard from "./components/dashboard/Dashboard";
import PriceListPage from "./pages/ui/PriceListPage";
import WasteCategoryList from "./components/dashboard/waste/WasteCategoryList";
import WasteCategoryEdit from "./components/dashboard/waste/WasteCategoryEdit";
import ScrapCategoryList from "./components/dashboard/scrap/ScrapCategoryList";
import ScrapCategoryEdit from "./components/dashboard/scrap/ScrapCategoryEdit";
import ScrapAdminList from "./components/dashboard/scrap/ScrapList";
import ScrapEditForm from "./components/dashboard/scrap/ScrapEdit";
import WasteAdminList from "./components/dashboard/waste/WasteList";
import WasteEditForm from "./components/dashboard/waste/WastEdit";
import BlogPage from "./pages/ui/BlogPage";
import BlogAdminList from "./components/dashboard/blog/BlogAdminList";
import BlogPostForm from "./components/dashboard/blog/BlogPostForm";
import BlogDetailsPage from "./components/ui/blog/BlogContent";
import AdminLoginForm from "./components/dashboard/AdminLoginForm";

function App() {
  const [user, setUserState] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const token = Cookies.get("jwt");
    if (!token) {

      console.log("no");
    } else {
      axios
        .get(verifyToken, {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((response) => {
          console.log(response);
          setUserState(response.data.user)
          dispatch(setUserDetails(response.data.user));
        });
    }
  },[]);

  return (
    <Fragment>
      <Routes>
      <Route path="/test" element={<TestPage/>}/>
        <Route path="/" element={<UserInterface />}>
          <Route path="/" element={<HomePage />} />
          
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/pricelist" element={<PriceListPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pickup" element={<OrderPage />} />
          <Route path="/bloglist" element={<BlogPage/>}/>
          <Route path="/blogdetails/:id" element={<BlogDetailsPage/>}/>
        </Route>
     
        <Route path="/profile" element={<ProfilePage />}>
          <Route path="pro" element={<ProfileDetails />} />
          <Route path="address" element={<AddressList />} />
          <Route path="orderlist" element={<OrderList />} />
        </Route>
        <Route path="adminlogin" element={<AdminLoginForm/>}/>
        <Route path="/admin" element={<Admin />}>
          <Route path="" element={<Dashboard/>}/>
          <Route path="usermanage" element={<UserTable />} />
          <Route path="ordermanage" element={<OrderDetails/>}/>
          <Route path="orderupdate/:id" element={<OrderUpdate/>}/>
          <Route path="wastecat" element={<WasteCategoryList/>}/>
          <Route path="wasteCatEdit/:id" element={<WasteCategoryEdit/>}/>
          <Route path="waste" element={<WasteAdminList/>}/>
          <Route path="wasteEdit/:id" element={<WasteEditForm/>}/>
          <Route path='scrapcat' element={<ScrapCategoryList/>}/>
          <Route path="scrapCatEdit/:id" element={<ScrapCategoryEdit/>}/>
          <Route path="scrap" element={<ScrapAdminList/>}/>
          <Route path="scrapEdit/:id" element={<ScrapEditForm/>} />
          <Route path="bloglist" element={<BlogAdminList/>}/>
          <Route path="blogpost" element={<BlogPostForm/>}/>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;


// -8wNq9nYN!#xe*v-8wNq9nYN!#xe*v






//  <li>
//       <button
//         type="button"
//         className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${isOpen ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
//         aria-controls="dropdown-example"
//         onClick={toggleDropdown}
//       >
//         <svg
//           aria-hidden="true"
//           className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
//           fill="currentColor"
//           viewBox="0 0 20 20"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fillRule="evenodd"
//             d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
//             clipRule="evenodd"
//           ></path>
//         </svg>
//         <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>
//          Waste
//         </span>
//         <svg
//           sidebar-toggle-item
//           className={`w-6 h-6 ${isOpen ? 'transform rotate-180' : ''}`}
//           fill="currentColor"
//           viewBox="0 0 20 20"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fillRule="evenodd"
//             d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//             clipRule="evenodd"
//           ></path>
//         </svg>
//       </button>
//       {isOpen && (
//         <ul id="dropdown-example" className="py-2 space-y-2">
//           <li>
//             <a
//               href="/admin/wastecat"
//               className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
//             >
//               Waste Category
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
//             >
//              Waste Types
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
//             >
//               Invoice
//             </a>
//           </li>
//         </ul>
//       )}
//     </li>