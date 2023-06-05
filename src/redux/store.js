import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./usernameSlice";
import adminSlice from './adminreducer'
import locationReducer from './locationSlice';

// import userSli


export const store = configureStore({
   reducer: {
      user: userSlice,
      admin : adminSlice,
      location: locationReducer,

   },
});


export default store;