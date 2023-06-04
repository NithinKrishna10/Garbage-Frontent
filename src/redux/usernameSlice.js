import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {  useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';


const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    setUserDetails: (state, action) => {
      console.log(action.payload,"this is actions");
      state.user = action.payload;
      console.log(state.user , "this is set user deatails");

    },
    clearUserDetails: (state) => {

        console.log(state.userDetails,"this is not set user deatails");
        Cookies.remove('jwt')
        // dispatch(setUserDetails(null));
        state.userDetails = null;
        console.log(state.user,"after the clear");
        let navgiate = useNavigate()
        navgiate('/')
        
  
    },
  },
});

export default userSlice.reducer
export const { setUserDetails, clearUserDetails } = userSlice.actions;
 