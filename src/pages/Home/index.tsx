import React from "react";
import { useRecoilValue } from "recoil";
import { atomUser } from "../../store/atoms";

const Home = () => {
  const user = useRecoilValue(atomUser);

  return (
    <div>
      Home
      <h1>Hello {user.name}</h1>
    </div>
  );
};

export default Home;
