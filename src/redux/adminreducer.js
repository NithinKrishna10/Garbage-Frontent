import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {  useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';


const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    admin: null,
  },
  reducers: {
    setAdminDetails: (state, action) => {
      console.log(action.payload,"this is actions");
      state.admin = action.payload;
      console.log(state.admin , "this is set admin deatails");

    },
    clearAdminDetails: (state) => {

        console.log(state.userDetails,"this is not set admin deatails");
        Cookies.remove('admin_jwt')
        // dispatch(setAdminDetails(null));
        state.userDetails = null;
        console.log(state.admin,"after the clear");
        let navgiate = useNavigate()
        navgiate('/adminlogin')
        
  
    },
  },
});

export default adminSlice.reducer
export const { setAdminDetails, clearAdminDetails } = adminSlice.actions;
 