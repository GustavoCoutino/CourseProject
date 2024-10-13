import React from "react";

function Register() {
  function handleRegister() {}
  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="rounded-lg shadow-lg bg-white p-8 w-full max-w-md flex flex-col items-center">
        <h1 className="text-2xl font-semibold mb-6">Create an Account</h1>
        <form action="" className="w-full">
          <div className="mb-4">
            <h3 className="text-gray-600 mb-1">Name</h3>
            <input
              type="text"
              placeholder="Enter your name"
              className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <h3 className="text-gray-600 mb-1">Email</h3>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <h3 className="text-gray-600 mb-1">Password</h3>
            <input
              type="password"
              placeholder="Create a password"
              className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-6">
            <h3 className="text-gray-600 mb-1">Re-enter Password</h3>
            <input
              type="password"
              placeholder="Re-enter your password"
              className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button className="rounded-md bg-blue-500 p-3 hover:bg-blue-600 w-full text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
            Register
          </button>
        </form>
      </div>
    </section>
  );
}

export default Register;
