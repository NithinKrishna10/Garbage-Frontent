
import React, { useState } from "react";
import axios from '../../../utils/axios'
import { signUpPost } from "../../../utils/Constant";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";




export default function RegisterForm() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
     // Validation checks
  if (!inputs.name || !inputs.email || !inputs.phone || !inputs.password) {
    // Display an error message for missing fields
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Please fill in all fields",
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  }

  if (!isValidEmail(inputs.email)) {
    // Display an error message for invalid email format
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Invalid email address",
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  }

  if (!isValidPhone(inputs.phone)) {
    // Display an error message for invalid phone number format
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Invalid phone number",
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  }

  // Proceed with form submission
  console.log(inputs);

    const data = {
      name: inputs.name,
      email: inputs.email,
      phone: inputs.phone,
      password: inputs.password,
    };

    axios
      .post("/api/register", data)
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
        if (response.status === 409) {
          console.log("anybody here");
          Swal.fire({
            position: "center",
            icon: "warning",
            title: "Email Already has an Account",
            showConfirmButton: false,
            timer: 1500,
          });
        } else if (response.status === 200) {
          Swal.fire({
            position: "center",
            icon: "warning",
            title: "Success",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/login");
        } else {
          Swal.fire({
            position: "center",
            icon: "warning",
            title: "Already exists",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "Already Exists",
          showConfirmButton: true,
          timer: 1500,
        });
      });
  };
  // Helper function to validate email format
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Helper function to validate phone number format
  const isValidPhone = (phone) => {
    const phoneRegex = /^\d{10}$/; // Assumes a 10-digit phone number format
    return phoneRegex.test(phone);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={inputs.name}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={inputs.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  value={inputs.phone}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={inputs.password}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14-day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
