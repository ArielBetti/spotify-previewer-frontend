import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";

// icons
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

// atoms: components
import { Input, Button } from "../..";

// recoil: atoms
import { atomSearch } from "../../../store/atoms";

// ::
const Search = () => {
  // local: states
  const [inputSearch, setInputSearch] = useState<string>("");

  // recoil: states
  const [search, setSearch] = useRecoilState(atomSearch);

  const onSearch = useCallback(() => {
    setSearch(inputSearch);
  }, [search, inputSearch]);

  useEffect(() => {
    setInputSearch(search);
  }, [search]);

  return (
    <div className="flex gap-2 pt-2 md:max-w-sm max-w-full">
      <Input
        onChange={(event) => setInputSearch(event.target.value)}
        placeholder="What do you listen?"
      />
      <Button onClick={() => onSearch()}>
        <MagnifyingGlassIcon className="h-6 w-6 text-white" />
      </Button>
    </div>
  );
};

export default Search;
