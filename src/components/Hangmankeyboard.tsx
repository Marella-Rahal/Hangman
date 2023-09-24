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
            className={`w-10 aspect-square text-center uppercase font-bold text-xl border-[1px] border-black pt-1 cursor-pointer hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white select-none 
            ${
              hangmanWord.includes(key) &&
              (guessedLetters.includes(key) || isLoser || isWinner)
                ? "bg-blue-500 text-white cursor-default"
                : ""
            }
            ${
              !hangmanWord.includes(key) &&
              (guessedLetters.includes(key) || isLoser || isWinner)
                ? "opacity-50 hover:bg-white hover:text-black focus:bg-white focus:text-black cursor-default"
                : ""
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
