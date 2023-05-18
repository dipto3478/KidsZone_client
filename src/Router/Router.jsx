import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../components/Home/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AllToys from "../components/AllToys/AllToys";
import MyToys from "../components/MyToys/MyToys";
import AddToy from "../components/AddToy/AddToy";
import Blogs from "../components/Blogs/Blogs";
import PrivateRouter from "../components/PrivateRouter/PrivateRouter";
import ToyDetails from "../components/ToyDetails/ToyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/alltoys",
        element: <AllToys />,
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRouter>
            <MyToys />
          </PrivateRouter>
        ),
      },
      {
        path: "/addtoy",
        element: (
          <PrivateRouter>
            <AddToy />
          </PrivateRouter>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/toydetails/:id",
        element: (
          <PrivateRouter>
            <ToyDetails />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
    ],
  },
]);

export default router;
