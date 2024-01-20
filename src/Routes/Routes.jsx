import { createBrowserRouter } from "react-router-dom";

import Main from "../Layouts/Main";
import AboutUs from "../Pages/FooterComponents/AboutUs";
import ContactUs from "../Pages/FooterComponents/ContactUs";
import Event from "../Pages/FooterComponents/Event";
import News from "../Pages/FooterComponents/News";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/Shared/NotFound";
import SignUp from "../Pages/SignUp/SignUp";

import Home from "./../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },

      {
        path: "events",
        element: <Event></Event>,
      },

      {
        path: "news",
        element: <News></News>,
      },
      {
        path: "contactUs",
        element: <ContactUs />,
      },

      {
        path: "about-us",
        element: <AboutUs />,
      },
    ],
  },

  {
    path: "*", // Match any unrecognized path
    element: <NotFound></NotFound>, // Replace "NotFound" with your own component
  },
]);
