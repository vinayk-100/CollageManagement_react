import { createBrowserRouter } from "react-router-dom";

import Layout from "../layouts/Layout";

// Pages
// import Home from "../pages/home";


import Logintest from "../pages/Login";
import Signup from "../pages/Signup";

import All_User_List from "../pages/UserManagement/All_User_List";
import Add_User_Page from "../pages/UserManagement/add_user_page";
import User_profile_page from "../pages/UserManagement/profile_page";

import Dashboard from "../pages/Dashboard/dashboard";
import SetPassword from "../pages/SetPassword/SetPassword";
import Login from "../pages/auth/login";



export const router = createBrowserRouter([
  // No layout — these pages stand alone
  
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/Logintest",
    element: <Logintest />,
  },

  // User
  {
    path: "/Add_User_Page",
    element: <Layout> <Add_User_Page /> </Layout>,
  },
  {
    path: "/All_User_List",
    element: <Layout> <All_User_List /> </Layout>,
  },
  {
    path: "/profile/:userId",
    element: <Layout> <User_profile_page /> </Layout>,
  },

  // Dashboard
  {
    path: "/",
    element: <Layout> <Dashboard /> </Layout>,
  },
  
  {
    path: "/SetPassword",
    element: <SetPassword  /> ,
  },
  {
    path: "/login",
    element: <Login  /> ,
  },
]);
