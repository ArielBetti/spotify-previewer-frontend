import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { atomUser } from "../../store/atoms";

const Login = () => {
  const user = useRecoilValue(atomUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);

  return (
    <div>
      <a href="http://localhost:8080/login">Login on Spotify</a>
    </div>
  );
};

export default Login;
