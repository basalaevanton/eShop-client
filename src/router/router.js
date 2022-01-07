import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Account from "../pages/Account";
import AuthPage from "../pages/AuthPage";
import Home from "../pages/Home";

const routes = (isLoggedIn) => [
  {
    path: "account",
    element: isLoggedIn ? <Account /> : <AuthPage />,
    // children: [{ path: '/account', element: <Account /> }],
  },
  {
    path: "/",
    element: <Home />,
    // children: [
    //   { path: '/', element: <Home /> },
    //   { path: '/login', element: <AuthPage /> },
    // ],
  },
];

export default routes;
