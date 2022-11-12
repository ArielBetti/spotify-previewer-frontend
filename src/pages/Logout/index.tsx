import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { atomToken, atomUser } from "../../store/atoms";

const Logout = () => {
  const navigate = useNavigate();

  const user = useRecoilValue(atomUser);
  const token = useRecoilValue(atomToken);

  const resetUser = useResetRecoilState(atomUser);
  const resetToken = useResetRecoilState(atomToken);

  useEffect(() => {
    if (!user && !token) {
      navigate("/");
    }
  }, [user, token]);

  useEffect(() => {
    resetUser();
    resetToken();
  }, [])

  return (
    <div>
      <p>Desconectando do seu usuário...</p>
    </div>
  );
};

export default Logout;
