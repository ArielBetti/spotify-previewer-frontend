import { useEffect } from "react";
import {
  useSetRecoilState,
  useRecoilValueLoadable,
  useRecoilState,
} from "recoil";
import { useNavigate, useParams } from "react-router-dom";
import { atomToken, atomUser } from "../../store/atoms";
import { selectorGetUser } from "../../store/selector";

const Auth = () => {
  const navigate = useNavigate();
  const { token } = useParams();

  // recoil: states
  const setToken = useSetRecoilState(atomToken);
  const [user, setUser] = useRecoilState(atomUser);

  // recoil: loadables
  const getUser = useRecoilValueLoadable(selectorGetUser);

  useEffect(() => {
    if (token) {
      setTimeout(() => {
        setToken(token.replace("token=", "Bearer "));
      }, 300);
    }
  }, [token]);

  useEffect(() => {
    if (getUser.state === "hasValue" && getUser.contents !== undefined) {
      setUser({
        name: getUser.contents?.display_name,
        image: getUser.contents?.images?.[0]?.url,
      });

      navigate("/home");
    }

    if (getUser.state === "hasError") {
      navigate("/");
    }
  }, [getUser.state, getUser.contents]);

  return (
    <div>
      {user && (
        <div>
          <h1>{user.name}</h1>
          <img src={user.image} alt="" />
        </div>
      )}
    </div>
  );
};

export default Auth;
