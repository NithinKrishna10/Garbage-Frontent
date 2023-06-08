
import { useEffect, useState } from "react";
import axios from "../../../utils/axios";
import { useSelector } from "react-redux";
const AddressList = () => {
  const [addresses, setAddresses] = useState([]);
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  // const [userId,changUserId] = useState(0)
  const { user } = useSelector((state) => state.user);
  // console.log(user,'sdjklfsdjklsdfjkl');
  const userId = user?.id;
  useEffect(() => {
    
    fetchAddresses();
    fetchDistricts();
    fetchCities();
    // changUserId(user.id)
  },[user]);

  const fetchCities = () => {
    axios
      .get("/api/cities") // Replace '/api/cities' with your server endpoint for fetching cities
      .then((response) => {
        console.log(response);
        const fetchedCities = response.data;
        setCities(fetchedCities);
      })
      .catch((error) => {
        console.error("Error fetching cities:", error);
      });
  };

  const fetchDistricts = () => {
    const apiurl = "/api/districts";
    axios
      .get(apiurl)
      .then((response) => {
        console.log(response);

        const fetchedDistricts = response.data;
        setDistricts(fetchedDistricts);
      })
      .catch((error) => {
        console.error("Error fetching districts:", error);
      });
  };
  const fetchAddresses = () => {
    const id = user?.id
    axios
      .get(`/api/addresses/${id}`) // Replace '/api/addresses' with your server endpoint for fetching addresses
      .then((response) => {
        console.log(response);
        const fetchedAddresses = response.data.map((address) => ({
          id: address.id,
          name: address.name,
          address1: address.address1,
          district: address.district.name,
          city: address.city.name,
          phone1: address.phone1,
          country: address.country,
          pincode: address.pincode,
        }));
        setAddresses(fetchedAddresses);
      })
      .catch((error) => {
        console.error("Error fetching addresses:", error);
      });
  };

  const [showAddAddress, setShowAddAddress] = useState(false);
  const [newAddress, setNewAddress] = useState({
    user: user?.id,
    name: "",
    address1: "",
    district: "",
    city: "",
    phone1: "",
    country: "",
    pincode: "",
  });

  const handleToggleAddAddress = () => {
    setShowAddAddress(!showAddAddress);
  };

  const handleChangeNewAddress = (e) => {
    setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
  };
  const handleAddAddress = () => {
    console.log(newAddress);
    axios
      .post("/api/addressess", newAddress) // Replace '/api/addresses' with your server endpoint for posting an address
      .then((response) => {
        const addedAddress = response.data;
        setAddresses([...addresses, addedAddress]);
        setNewAddress({
          // Reset new address fields
        });
      })
      .catch((error) => {
        console.error("Error adding address:", error);
      });
  };

  return (
    <div className="max-w-[89vh] md:ml-auto md:mr-auto ml-10 mr-10 mt-11">
      <h2 className="text-xl font-bold mb-4">Address List</h2>
      {addresses.map((address) => (
        <div
          key={address.user}
          className="bg-white rounded-lg shadow-md p-4 mb-4"
        >
          <h3 className="text-lg font-semibold">{address.name}</h3>
          <p className="mb-1">{address.address1}</p>
          <p className="mb-1">
            {address.district}, {address.city}
          </p>
          <p className="mb-1">Phone: {address.phone1}</p>
          <p className="mb-1">Country: {address.country}</p>
          <p className="mb-1">Pincode: {address.pincode}</p>
        </div>
      ))}
      {showAddAddress ? (
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <h3 className="text-lg font-semibold">Add Address</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Name</label>
              <input
                className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="name"
                value={newAddress.name}
                onChange={handleChangeNewAddress}
              />
            </div>
            
            <div>
              <label className="block mb-1">Address</label>
              <input
                className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="address1"
                value={newAddress.address1}
                onChange={handleChangeNewAddress}
              />
            </div>
            <div>
              <label className="block mb-1">District</label>
              <select
                className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="district"
                value={newAddress.district}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, district: e.target.value })
                }
              >
                <option value="">Select District</option>
                {districts.map((district) => (
                  <option key={district.id} value={district.id}>
                    {district.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1">City</label>
              <select
                className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="city"
                value={newAddress.city}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, city: e.target.value })
                }
              >
                <option value="">Select City</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1">Phone</label>
              <input
                className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="phone1"
                value={newAddress.phone1}
                onChange={handleChangeNewAddress}
              />
            </div>
            <div>
              <label className="block mb-1">Country</label>
              <input
                className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="country"
                value={newAddress.country}
                onChange={handleChangeNewAddress}
              />
            </div>
            <div>
              <label className="block mb-1">Pincode</label>
              <input
                className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="pincode"
                value={newAddress.pincode}
                onChange={handleChangeNewAddress}
              />
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button className="btn btn-primary mr-2" onClick={handleAddAddress}>
              Save
            </button>
            <button
              className="btn btn-secondary"
              onClick={handleToggleAddAddress}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-end">
          <button className="btn btn-primary" onClick={handleToggleAddAddress}>
            Add Address
          </button>
        </div>
      )}
    </div>
  );
};

export default AddressList;
