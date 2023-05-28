import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {  useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
// import {  useNavigate } from "react-router-dom";
// import Cookies from 'js-cookie';

// const name = 'username'

// const initialState = createInitialState();
// const reducers = createReducers();
// const extraActions = createExtraActions()

// const slice = createSlice({
//   name,
//   initialState,
//   reducers
// })

// function createInitialState(){
//   return {
//     value: null
//   }      
// }

// function createReducers(){
//   return {
//     setUsername,
//   }

//   function setUsername(state, action){
//     state.value = action.payload['name'];
//     console.log(action.payload['name'],"hain");
//   }
// }

// function createExtraActions(){
//   return {
//     logOut: logOut()
//   }
//   function logOut(){
//       return createAsyncThunk(
//         `${name}/logout`,
//         async function (arg,{dispatch}){
//           try{
//             Cookies.remove('jwt')
//             dispatch(userAction.setUsername(null));
//             let navgiate = useNavigate()
//             const nav = ()=>navgiate('/')
//             nav()
            
//           } catch (error) {
//               console.log(error)
//           }
//         }
//       )
//   }
// }



// export const userAction = {...slice.actions,...extraActions}
// export const userReducers = slice.reducer


// export default userReducers

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
 