import styled from "styled-components";
import { useEffect, useState } from "react";
import Input from "../components/Input";
import Erro from "../components/Erro";
import BotaoList from "../components/BotaoList";
import Letter from "../services/Letter";
import { useContexto } from "../hooks";

export default function Principal() {
  const [letter, setLetter] = useState("");

  const {setLetters, letters} = useContexto();

  const getLetters = () => {
    Letter.list().then(data => setLetters(data));
  }
  
  const newLetter = () => {
    Letter.create(letter).then((data) => {
      getLetters();
      setLetter('');
      console.log(data);
    });
  }

  useEffect(() => {
    getLetters();
  }, [letters]);
  return (
      <BoxSld>
        <Input 
        placeholder="Digite a letra e <enter>" 
        onChange={(e)=>setLetter(e.target.value)} 
        value={letter} 
        onSubmit={() => {
          newLetter()}}/>
        <Erro>Msg erro</Erro>
        <BotaoList />
      </BoxSld>
  );
}

const BoxSld = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
