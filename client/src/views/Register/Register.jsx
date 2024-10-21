import { useNavigate } from "react-router-dom";
import { useState } from "react";
import authService from "../../services/authService";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rePasswordError, setRePasswordError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();
  const errorClasses = "bg-red-100 border-red-500";

  function validateName(value) {
    if (value === "") {
      setNameError("Name is required");
    } else {
      setNameError("");
    }
  }

  function validateEmail(value) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value === "") {
      setEmailError("Email is required");
    } else if (!emailPattern.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  }

  function validatePassword(value) {
    if (value === "") {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }
  }

  function validateRePassword(value) {
    if (value === "") {
      setRePasswordError("Password is required");
    } else if (value !== password) {
      setRePasswordError("Passwords do not match");
    } else {
      setRePasswordError("");
    }
  }

  async function handleRegister(e) {
    e.preventDefault();
    validateName(name);
    validateEmail(email);
    validatePassword(password);
    validateRePassword(rePassword);

    if (
      nameError ||
      emailError ||
      passwordError ||
      rePasswordError ||
      name === "" ||
      email === "" ||
      password === "" ||
      rePassword === ""
    ) {
      return;
    }

    try {
      const response = await authService.register(name, email, password);
      if (response) {
        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        setRegisterError(error.response.data.message);
      } else {
        setRegisterError("An error occurred. Please try again later.");
      }
    }
  }

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="rounded-lg shadow-lg bg-white p-8 w-full max-w-md flex flex-col items-center">
        <h1 className="text-2xl font-semibold mb-6">Create an Account</h1>
        <form onSubmit={handleRegister} className="w-full">
          <div className="mb-4">
            <h3 className="text-gray-600 mb-1">Name</h3>
            <input
              onChange={(e) => {
                setName(e.target.value);
                validateName(e.target.value);
                setRegisterError("");
              }}
              type="text"
              placeholder="Enter your name"
              className={`p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                nameError || registerError ? errorClasses : ""
              }`}
            />
            {nameError && (
              <p className="text-red-500 text-sm mt-1">{nameError}</p>
            )}
          </div>
          <div className="mb-4">
            <h3 className="text-gray-600 mb-1">Email</h3>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
                setRegisterError("");
              }}
              type="email"
              placeholder="Enter your email"
              className={`p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                emailError || registerError ? errorClasses : ""
              }`}
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>
          <div className="mb-4">
            <h3 className="text-gray-600 mb-1">Password</h3>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword(e.target.value);
                setRegisterError("");
              }}
              type="password"
              placeholder="Create a password"
              className={`p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                passwordError || registerError ? errorClasses : ""
              }`}
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>
          <div className="mb-6">
            <h3 className="text-gray-600 mb-1">Re-enter Password</h3>
            <input
              onChange={(e) => {
                setRePassword(e.target.value);
                validateRePassword(e.target.value);
                setRegisterError("");
              }}
              type="password"
              placeholder="Re-enter your password"
              className={`p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                rePasswordError || registerError ? errorClasses : ""
              }`}
            />
            {rePasswordError && (
              <p className="text-red-500 text-sm mt-1">{rePasswordError}</p>
            )}
          </div>
          <button
            type="submit"
            className="rounded-md bg-blue-500 p-3 hover:bg-blue-600 w-full text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Register
          </button>
          <div className="justify-start mt-4">
            <p className="text-sm text-gray">
              <span
                onClick={() => navigate("/login")}
                className="hover:underline text-blue-500 cursor-pointer"
              >
                Log in here
              </span>
            </p>
          </div>
          {registerError && (
            <p className="text-red-500 text-sm mt-4">{registerError}</p>
          )}
        </form>
        <button
          onClick={() => navigate("/")}
          className="mt-4 rounded-md bg-gray-200 p-3 hover:bg-gray-300 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Back to Home
        </button>
      </div>
    </section>
  );
}

export default Register;
