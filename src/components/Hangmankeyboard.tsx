import { useCallback } from "react";
const KEYS: string[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type HangmanKeyboardPropsType = {
  isWinner: boolean;
  isLoser: boolean;
  guessedLetters: string[];
  hangmanWord: string;
  setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>;
};
const Hangmankeyboard = ({
  isWinner,
  isLoser,
  guessedLetters,
  hangmanWord,
  setGuessedLetters,
}: HangmanKeyboardPropsType) => {
  // handle keyboard keys on the screen function
  const handleKeys = useCallback((key: string) => {
    setGuessedLetters((prev: string[]): string[] =>
      prev.includes(key) ? prev : [...prev, key]
    );
  }, []);

  return (
    <div className="flex justify-center items-center flex-wrap gap-2 px-2">
      {KEYS.map((key: string) => {
        return (
          <button
            disabled={isLoser || isWinner}
            key={key}
            className={`w-10 aspect-square text-center uppercase font-bold text-xl border-[1px] border-black pt-1 select-none 
            ${
              !guessedLetters.includes(key) && !isLoser && !isWinner
                ? "cursor-pointer hover:bg-blue-500 hover:text-white"
                : hangmanWord.includes(key)
                ? "bg-blue-500 text-white"
                : "opacity-50"
            }   
            `}
            onClick={() => handleKeys(key)}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Hangmankeyboard;
