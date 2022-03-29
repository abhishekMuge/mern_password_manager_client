import { useState } from "react";
import axios from "axios";

//logic of component

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loggedInUser = async () => {
    const res = await axios.post("http://localhost:5000/api/users/login", {
      email: email,
      password: password,
    });
    console.log(res);
  };

  return (
    <div className="flex w-screen overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 h-screen">
      <div
        className="hidden bg-cover lg:block lg:w-2/3"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80")',
        }}
      />

      <div className="w-full my-auto px-6 py-8 md:px-8 lg:w-1/3">
        <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">
          Password manager client
        </h2>
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4" />
          <span className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline cursor-pointer">
            or login with email
          </span>
          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4" />
        </div>
        <div className="mt-4 text-left">
          <label
            className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
            htmlFor="LoggingEmailAddress"
          >
            Email Address
          </label>
          <input
            id="LoggingEmailAddress"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <div className="flex justify-between">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="loggingPassword"
            >
              Password
            </label>
            <a
              href="#/"
              className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
            >
              Forget Password?
            </a>
          </div>
          <input
            id="loggingPassword"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-8">
          <button
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            onClick={loggedInUser}
          >
            Login
          </button>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
          <a
            href="/signup"
            className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            or sign up
          </a>
          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
        </div>
      </div>
    </div>
  );
}
