const HEAD = (
  <div className="w-[50px] h-[50px] rounded-full border-solid border-black border-[6px] absolute -right-[95px] top-[35px]" />
);

const BODY = (
  <div className="w-[6px] h-[85px] bg-black absolute -right-[72px] top-[85px]" />
);

const RIGHT_ARM = (
  <div className="w-[6px] h-[70px] bg-black absolute -right-[72px] top-[50px] rotate-[55deg] origin-bottom-left" />
);

const LEFT_ARM = (
  <div className="w-[6px] h-[70px] bg-black absolute -right-[72px] top-[50px] rotate-[-55deg] origin-bottom-right" />
);

const RIGHT_LEG = (
  <div className="w-[6px] h-[70px] bg-black absolute -right-[72px] top-[170px] -rotate-[30deg] origin-top-left" />
);

const LEFT_LEG = (
  <div className="w-[6px] h-[70px] bg-black absolute -right-[72px] top-[170px] rotate-[30deg] origin-top-right" />
);

const BODY_PARTS = [
  <div key="h">{HEAD}</div>,
  <div key="b">{BODY}</div>,
  <div key="ra">{RIGHT_ARM}</div>,
  <div key="la">{LEFT_ARM}</div>,
  <div key="rl">{RIGHT_LEG}</div>,
  <div key="ll">{LEFT_LEG}</div>,
];

type HangmanPropsType = {
  numberOfWrongGuessed: number;
};

const Hangman = ({ numberOfWrongGuessed }: HangmanPropsType) => {
  return (
    <div className="relative -left-[20%]">
      {BODY_PARTS.slice(0, numberOfWrongGuessed)}
      {/* The Short Vertical Base */}
      <div className="w-[6px] h-[35px] bg-black absolute -right-[72px]" />
      {/* The Top Horizontal Base */}
      <div className="w-[150px] h-[6px] bg-black absolute left-[72px]" />
      {/* The Long Vertical Base */}
      <div className="w-[6px] h-[320px] bg-black ml-[72px]" />
      {/* The Bottom Horizontal Base */}
      <div className="w-[150px] h-[6px] bg-black" />
    </div>
  );
};

export default Hangman;
