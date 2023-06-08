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
      
      state.user = action.payload;
   


    },
    clearUserDetails: (state) => {

     
        Cookies.remove('jwt')

        state.userDetails = null;
        let navgiate = useNavigate()
        navgiate('/')
        
    },
  },
});

export default userSlice.reducer
export const { setUserDetails, clearUserDetails } = userSlice.actions;
 