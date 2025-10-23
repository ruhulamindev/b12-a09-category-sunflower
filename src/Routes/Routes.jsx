import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import ServiceAll from "../Pages/ServiceAll";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement:<ErrorPage/>,
    children:[
        {
          index:true,
          element: <Home/>,
        },
        {
          path:"/services",
          element: <ServiceAll/>,
        },
        {
          path:"/Signup",
          element: <Signup/>,
        },
        {
          path:"/Signin",
          element: <Signin/>,
        },
    ],
  },
]); 