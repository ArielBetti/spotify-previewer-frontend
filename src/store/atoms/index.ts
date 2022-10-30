import { atom } from "recoil";
import { TUser } from "../../interfaces";
import { localStorageEffect } from "../../utils/localStorageEffect";

export const atomToken = atom<string>({
  key: "atomToken",
  default: "",
});

export const atomUser = atom<TUser>({
  key: "atomUser",
  default: undefined,
  effects: [localStorageEffect("atomUser")],
});
