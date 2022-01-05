import React, { useEffect } from "react";
import { withLayout } from "../layout/Layout";

import { useTypedSelector, useActions } from "../hooks";

const Home = () => {
  // const { start } = useTypedSelector((state) => state.AuthState);
  // const {} = useActions();

  return (
    <>
      <h1>Start React KIT</h1>
    </>
  );
};

export default withLayout(Home);
