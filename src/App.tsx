import React, { useEffect } from "react";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { useActions, useTypedSelector } from "./hooks";
import Account from "./pages/Account";

// import routes from './routes';
// import { useRoutes } from 'react-router-dom';

import Home from "./pages/Home";
import Login from "./pages/Login";

function RequireAuth() {
  const { isAuth } = useTypedSelector((state) => state.AuthState);
  const location = useLocation();
  console.log(isAuth);

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />;
}

const App = function (): JSX.Element {
  const { checkAuth } = useActions();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route element={<RequireAuth />}>
          <Route path="/account" element={<Account />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
