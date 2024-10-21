import { useNavigate } from "react-router-dom";
import { useState } from "react";
import authService from "../../services/authService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const errorClasses = "bg-red-100 border-red-500";

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

  async function handleLogin(e) {
    e.preventDefault();
    validateEmail(email);
    validatePassword(password);

    if (emailError || passwordError || email === "" || password === "") {
      return;
    }

    try {
      const response = await authService.login(email, password);
      if (response) {
        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        setLoginError(error.response.data.message);
      } else {
        setLoginError("An error occurred. Please try again later.");
      }
    }
  }

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="rounded-lg shadow-lg bg-white p-8 w-full max-w-md flex flex-col items-center">
        <h1 className="text-2xl font-semibold mb-4">Welcome Back</h1>
        <form onSubmit={handleLogin} className="w-full">
          <div className="mb-4">
            <h3 className="text-gray-600 mb-1">Email</h3>
            <input
              type="email"
              value={email}
              className={`p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                emailError || loginError ? errorClasses : ""
              }`}
              placeholder="Enter your email"
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
                setLoginError("");
              }}
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>
          <div className="mb-6">
            <h3 className="text-gray-600 mb-1">Password</h3>
            <input
              type="password"
              value={password}
              placeholder="Password"
              className={`p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                passwordError || loginError ? errorClasses : ""
              }`}
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword(e.target.value);
                setLoginError("");
              }}
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>
          <button
            type="submit"
            className="rounded-md bg-blue-500 p-3 hover:bg-blue-600 w-full text-white"
          >
            Login
          </button>
          {loginError && (
            <p className="text-red-500 text-sm mt-4">{loginError}</p>
          )}
          <div className="justify-start mt-4">
            <p className="text-sm text-gray">
              Don't have an account?
              <span
                onClick={() => navigate("/register")}
                className="hover:underline text-blue-500 cursor-pointer"
              >
                Register here
              </span>
            </p>
          </div>
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

export default Login;
