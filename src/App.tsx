import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Account from './pages/Account';

// import routes from './routes';
// import { useRoutes } from 'react-router-dom';


import Home from './pages/Home';
import Signin from './pages/Signin';

const App = function (): JSX.Element {
  // const { isLoggedIn } = useSelector((state) => state.auth);
  // const routing = useRoutes(routes(isLoggedIn));

  return (
    <>
      {/* {routing} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="account" element={<Account />} />
        <Route path="signin" element={<Signin/>} />
      </Routes>
    </>
  );
};

export default App;
