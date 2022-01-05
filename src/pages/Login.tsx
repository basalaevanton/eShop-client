import React, { useEffect, useState } from "react";
import { withLayout } from "../layout/Layout";

import { useTypedSelector, useActions } from "../hooks";

const Login = () => {
  const { user, isAuth } = useTypedSelector((state) => state.AuthState);
  const { login, logout } = useActions();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => login(email, password)}>send</button>
        <button onClick={logout}>registration</button>
      </div>
    </>
  );
};

export default withLayout(Login);
