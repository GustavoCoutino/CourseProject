import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="rounded-lg shadow-lg bg-white p-8 w-full max-w-md flex flex-col items-center">
        <h1 className="text-2xl font-semibold mb-4">Welcome Back</h1>
        <form action="" className="w-full">
          <div className="mb-4">
            <h3 className="text-gray-600 mb-1">Email</h3>
            <input
              type="email"
              className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            ></input>
          </div>
          <div className="mb-6">
            <h3 className="text-gray-600 mb-1">Password</h3>
            <input
              type="password"
              placeholder="Password"
              className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button className="rounded-md bg-blue-500 p-3 hover:bg-blue-600 w-full text-white">
            Login
          </button>
          <div className="justify-start">
            <p className="text-sm text-gray">
              Dont have an account?{" "}
              <span
                onClick={navigate("/register")}
                className="hover:underline text-blue-500 cursor-pointer"
              >
                Register here
              </span>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
