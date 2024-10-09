import logo from "../assets/Logo.png";

function Header() {
  return (
    <div className="flex p-4 bg-gray-100 border-b-4 justify-between shadow-md items-center">
      <div>
        <img src={logo} className="h-10 w-auto"></img>
      </div>
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 hover:shadow-lg transition">
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
