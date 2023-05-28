import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./usernameSlice";
// import userSli


export const store = configureStore({
   reducer: {
      user: userSlice,

   },
});


export default store;