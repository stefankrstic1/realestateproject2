import { atom } from "jotai";

export const usingMapAtom = atom(false);

export const usingSizeWindow = atom({ height: 0, width: 0 });

export const changeUsingMapAtom = atom(
  (get) => get(usingMapAtom),
  (get, set, _arg) => set(usingMapAtom, !get(usingMapAtom))
);
