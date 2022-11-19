import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { Button, Input } from "../../components";
import { atomUser } from "../../store/atoms";
import { selectorGetUser } from "../../store/selector";

const Home = () => {
  const user = useRecoilValue(atomUser);

  useRecoilValueLoadable(selectorGetUser);

  return (
    <div>
      <div className="flex gap-2 pt-2 md:max-w-sm max-w-full">
        <Input placeholder="O que você quer ouvir?" />
        <Button>Ok</Button>
      </div>
    </div>
  );
};

export default Home;
