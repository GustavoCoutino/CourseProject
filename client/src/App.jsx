import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/mainPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

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
