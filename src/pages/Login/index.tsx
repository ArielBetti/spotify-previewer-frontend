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
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl font-bold">Welcome!</h1>
      <p>This application is a spotify music preview</p>
      <div className="pt-3">
        <a
          className="text-white bg-spotify-green p-3 rounded-sm shadow-lg font-semibold w-auto hover:bg-spotify-green-200 transition-colors"
          href="http://localhost:8080/login"
        >
          Login on Spotify
        </a>
      </div>
    </div>
  );
};

export default Login;
