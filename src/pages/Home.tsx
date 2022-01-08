import React, { useEffect } from "react";
import { withAppLayout } from "../layout/";

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

export default withAppLayout(Home);
