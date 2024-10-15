import logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="flex p-4 bg-gray-100 border-b-4 justify-between shadow-md items-center">
      <div>
        <img src={logo} className="h-10 w-auto"></img>
      </div>
      <div className="flex max-w-4xl">
        <input
          type="text"
          placeholder="Search templates..."
          className="w-screen p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        ></input>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={() => navigate("/login")}
          className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 hover:shadow-lg transition"
        >
          Login
        </button>

        <button className="bg-white text-blue-500 border border-blue-500 rounded-md px-4 py-2 hover:bg-gray-200 hover:shadow-lg transition">
          Register
        </button>
      </div>
    </div>
  );
}

export default Header;
