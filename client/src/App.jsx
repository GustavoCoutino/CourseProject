import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./views/MainPage/MainPage";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
