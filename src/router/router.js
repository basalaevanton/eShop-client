import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import {
  Home,
  AuthPage,
  AccountInfo,
  AdressBook,
  AccountAdmin,
  Favorites,
  Orders,
} from "../pages";

const routes = (isLoggedIn) => [
  {
    path: "account",
    element: isLoggedIn ? <Outlet /> : <AuthPage />,
    children: [
      { path: "", element: <Navigate to="/account/info" /> },
      { path: "info", element: <AccountInfo /> },
      { path: "adress", element: <AdressBook /> },
      { path: "favorites", element: <Favorites /> },
      { path: "orders", element: <Orders /> },
      { path: "admin", element: <AccountAdmin /> },
    ],
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
