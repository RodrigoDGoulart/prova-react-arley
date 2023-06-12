import { createContext, useState } from "react";
import { ContextProps, LetterProps } from "../types";

const Contexto = createContext({} as ContextProps);

function Provider({ children }: any) {
  const [letters, setLetters] = useState([] as LetterProps[]);

  // fazer requisição get aqui!!! não fazer nos outros componentes, use useEffect!!!!
  return (
    <Contexto.Provider value={{ letters, setLetters }}>
      {children}
    </Contexto.Provider>
  );
}

export { Contexto, Provider };
