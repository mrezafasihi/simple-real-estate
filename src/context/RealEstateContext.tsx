import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { ISignUp } from "../types/signUp.types";

interface ITotal {
  allAd: ISignUp[] | undefined;
  setAllAd: Dispatch<SetStateAction<ISignUp[] | undefined>>;
  selectedAd: ISignUp | undefined;
  setSelectedAd: Dispatch<SetStateAction<ISignUp | undefined>>;
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}
export const EstateContext = createContext({} as ITotal);

const EstateContextProvider = (props: { children: ReactNode }) => {
  const [allAd, setAllAd] = useState<ISignUp[]>();
  const [selectedAd, setSelectedAd] = useState<ISignUp>();
  const [theme, setTheme] = useState("light");
  return (
    <EstateContext.Provider
      value={{ allAd, setAllAd, selectedAd, setSelectedAd, theme, setTheme }}
    >
      {props.children}
    </EstateContext.Provider>
  );
};

function useCustomeContext(): ITotal {
  const context = useContext(EstateContext);

  return context;
}

export { EstateContextProvider, useCustomeContext };
