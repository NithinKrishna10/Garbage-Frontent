import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../utils/axios";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { setUserDetails } from "../../../redux/usernameSlice";
import { loginPost } from "../../../utils/Constant";
import { clearUserDetails } from "../../../redux/usernameSlice";
const LoginForm = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = Cookies.get("jwt");
    console.log(token);
    // Cookies.remove('jwt')
    if (token) {
        
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleLogout = () => {
    console.log("hsdafiuhd");
    return dispatch(clearUserDetails());
 };
  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = inputs;
   
    if (email === "" || password === "") {
      Swal.fire("Please fill in all fields.");
    } else {
      const data = JSON.stringify({
        email,
        password,
      });

      axios
        .post(loginPost, data, {
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
          console.log(response.data);
          if (
            response.data === "Wrong password" ||
            response.data === "Email or Password is Wrong" ||
            response.data === "no user" ||
            response.data === "Password is incorrect"
          ) {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Email or Password is incorrect",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            console.log(response.data, "dhjfksklfjiojdfjodfoijiofjeiojrijeiofhjni");
            Cookies.set("jwt", String(response.data.user_jwt));
            Cookies.set("id", String(response.data.id));
            dispatch(setUserDetails(response.data.user));
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Login Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            if (response.status === 200) {
              console.log(response.data);
              navigate("/");
            }
          }
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "An error occurred. Please try again later.",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLogin}>
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
            <a href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Dont have account register
            </a>
          </p>
        </div>
        <button onClick={handleLogout}>Logut</button>
      </div>
    </>
  );
};

export default LoginForm;
