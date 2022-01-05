import React, { useEffect } from "react";
import { withLayout } from "../layout/Layout";


import { useTypedSelector, useActions } from "../hooks";

const Home = () => {
  const { start } = useTypedSelector((state) => state.startStore);
  const { setStart } = useActions();

  console.log(start);

  useEffect(() => {
    setStart("hello");
  }, []);

  return (
    <>
      <h1>Start React KIT</h1>
      <div>{start} from Redux</div>
   
    </>
  );
};

export default withLayout(Home);
