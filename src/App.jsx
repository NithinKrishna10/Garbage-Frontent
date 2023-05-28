import { useState, useEffect } from "react";
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
import PlaceOrderForm from "./components/ui/form/PlaceOrderForm";
import OrderPage from "./pages/ui/OrderPage";
import OrderDetails from "./components/dashboard/tables/OrderTable";
import OrderUpdate from "./components/dashboard/form/OrderUpdate";
import OrderList from "./components/ui/profile/OrderList";
import TestPage from "./test/TestPage";
import Dashboard from "./components/dashboard/Dashboard";

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
    <>
      <Routes>
      <Route path="/test" element={<TestPage/>}/>
        <Route path="/" element={<UserInterface />}>
          <Route path="/" element={<HomePage />} />
          
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pickup" element={<OrderPage />} />
        </Route>
     
        <Route path="/profile" element={<ProfilePage />}>
          <Route path="pro" element={<ProfileDetails />} />
          <Route path="address" element={<AddressList />} />
          <Route path="orderlist" element={<OrderList />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="" element={<Dashboard/>}/>
          <Route path="usermanage" element={<UserTable />} />
          <Route path="ordermanage" element={<OrderDetails/>}/>
          <Route path="orderupdate/:id" element={<OrderUpdate/>}/>

        </Route>
      </Routes>
    </>
  );
}

export default App;


// -8wNq9nYN!#xe*v-8wNq9nYN!#xe*v