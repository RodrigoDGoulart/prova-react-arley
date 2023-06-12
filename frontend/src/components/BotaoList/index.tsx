import { useContexto } from "../../hooks";
import Letter from "../../services/Letter";
import Botao from "../Botao";

export default function BotaoList() {
  const { letters, setLetters } = useContexto();

  const getLetters = () => {
    Letter.list().then(list => setLetters(list));
  }

  return (
    <>
      {letters.map(letter => (
        <Botao
        onLeftClick={() => {
          // add cllique
          Letter.inc(letter.letter);
          getLetters();
        }}
        onRightClick={() => {
          Letter.remove(letter.letter);
          getLetters();
        }}
        >
          {letter.letter} | {letter.count}
        </Botao>
      ))}
    </>
  )
}