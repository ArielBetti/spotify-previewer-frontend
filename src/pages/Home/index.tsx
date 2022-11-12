import { useRecoilValue, useRecoilValueLoadable} from "recoil";
import { atomUser } from "../../store/atoms";
import { selectorGetUser } from "../../store/selector";

const Home = () => {
  const user = useRecoilValue(atomUser);

  useRecoilValueLoadable(selectorGetUser);

  return (
    <div>
      Home
      <h1>Hello {user?.name}</h1>
    </div>
  );
};

export default Home;
