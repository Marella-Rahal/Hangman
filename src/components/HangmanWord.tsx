type HangmanWordPropsType = {
  isLoser: boolean;
  hangmanWord: string;
  guessedLetters: string[];
};

const HangmanWord = ({
  isLoser,
  hangmanWord,
  guessedLetters,
}: HangmanWordPropsType) => {
  return (
    <div className="flex justify-center items-center gap-3 flex-wrap font-bold text-[30px]">
      {hangmanWord.split("").map((letter: string, index: number) => {
        return (
          <span
            key={index}
            className={`border-b-4 border-black w-6 h-12 text-center uppercase self-end select-none ${
              isLoser && !guessedLetters.includes(letter) ? "text-red-600" : ""
            }`}
          >
            {guessedLetters.includes(letter) || isLoser ? letter : ""}
          </span>
        );
      })}
    </div>
  );
};

export default HangmanWord;
