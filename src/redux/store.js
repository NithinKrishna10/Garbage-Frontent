import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./usernameSlice";
import adminSlice from './adminreducer'
// import userSli


export const store = configureStore({
   reducer: {
      user: userSlice,
      admin : adminSlice,

   },
});


export default store;