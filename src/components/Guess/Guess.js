import { range } from "../../utils";

export const Guess = ({ guess = "" }) => {
  const getLetter = (index) => {
    const split = guess.split("");
    return split?.[index] || null;
  };
  return (
    <p className="guess">
      {range(0, 5, 1).map((index) => (
        <span key={index} className="cell">
          {getLetter(index)}
        </span>
      ))}
    </p>
  );
};
