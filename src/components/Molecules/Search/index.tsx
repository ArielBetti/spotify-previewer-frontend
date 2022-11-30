import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { Button, Input } from "../..";
import { atomSearch } from "../../../store/atoms";

const Search = () => {
  // local: states
  const [inputSearch, setInputSearch] = useState<string>("");

  // recoil: states
  const [search, setSearch] = useRecoilState(atomSearch);

  const onGetSearch = useCallback(() => {
    setSearch(inputSearch);
  }, [search, inputSearch]);

  useEffect(() => {
    setInputSearch(search);
  }, [search]);

  return (
    <div className="flex gap-2 pt-2 md:max-w-sm max-w-full">
      <Input
        onChange={(e) => setInputSearch(e.target.value)}
        placeholder="O que você quer ouvir?"
      />
      <Button onClick={() => onGetSearch()}><MagnifyingGlassIcon className="w-5 h-5"/></Button>
    </div>
  );
};

export default Search;
