import { createSlice } from '@reduxjs/toolkit';

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    lng: 54.37585762735543,
    lat: 24.45677614934833,
  },
  reducers: {
    setLatLng: (state, action) => {
      state.lng = action.payload.lng;
      state.lat = action.payload.lat;
     
    },
  },
});

export const { setLatLng } = locationSlice.actions;

export default locationSlice.reducer;
