
// export default AddLocation


// import React, { useState } from 'react';
// import ReactMapGL, { Layer, Marker, Popup } from "react-map-gl";
// import "mapbox-gl/dist/mapbox-gl.css";
// const TOKEN = import.meta.env.VITE_REACT_APP_MAP_TOKEN;

// const AddLocation = () => {
//   // console.log(TOKEN,'this is token');
//   const [newPlace, setNewPlace] = useState(null);
//   const [viewport, setViewport] = useState({
//     latitude: 28.6448,
//     longitude: 77.216721,
//     zoom: 10,
//   });
//   return (
//     <div className='bg-blue w-[100vw] h-[100vh]'>
//       <h1>Hai</h1>
//       <ReactMapGL
//         {...viewport}
//         mapboxApiAccessToken={TOKEN}
//         width="100%"
//         height="100%"
//         transitionDuration="100"
//         mapStyle="mapbox://styles/nithin10/clihi06xa002m01qp6ctd2ty2"
//         // onViewportChange={setViewport}
//       >
     

//       </ReactMapGL>
//     </div>
//   );
// };

// export default AddLocation;


import React, { useState } from 'react';
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Marker,
  NavigationControl,
  Popup,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";
import { useDispatch } from 'react-redux';
import { setLatLng } from '../../../redux/locationSlice';


const AddLocation = () => {

  const dispatch = useDispatch()
  
  const [lng, setLng] = useState(54.37585762735543);
  const [lat, setLat] = useState(24.45677614934833);
  console.log(lat,lng);
  const setlatlnggeo = (e)=>{
   
    console.log(e);
    // console.log(e.lngLat.lng);
    setLng( e.coords.longitude)
    setLat(e.coords.latitude)
    dispatch(setLatLng({ lng, lat }));
  }
  const setlatlng = (e)=>{
    console.log(e);
    // console.log(e.lngLat.lng);
    setLng(e.lngLat.lng)
    setLat(e.lngLat.lat)
    dispatch(setLatLng({ lng, lat }));
  }
  return (


    <div className="App">
    {/* {console.log(import.meta.env.VITE_REACT_APP_MAP_TOKEN)} */}
      <h1>Mapbox tutorial</h1>
      <Map
        mapboxAccessToken={import.meta.env.VITE_REACT_APP_MAP_TOKEN}
        style={{
          width: "50vh",
          height: "40vh",
          borderRadius: "15px",
          border: "2px solid red",
        }}
        initialViewState={{
          longitude: lng,
          latitude: lat,
        }}
        onDragEnd={(e) => setlatlng(e)}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
          <Marker
          latitude={lat}
          longitude={lng}
          draggable
          onDragEnd={(e) =>
            setlatlng(e)
          }
        />
        <NavigationControl position="bottom-right" />
        <FullscreenControl />

        <GeolocateControl 
          onGeolocate={(e) =>setlatlnggeo(e)
          }
          />
      </Map>
    </div>

  );
};

export default AddLocation;
