export interface LetterProps{
    letter: string;
    count: number;
}

export interface ContextProps {
    letters: LetterProps[];
    setLetters: React.Dispatch<React.SetStateAction<LetterProps[]>>;
}
