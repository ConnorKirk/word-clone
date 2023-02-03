import { range } from "../../utils";

export const Guess = ({ guess }) => {
  const getLetter = (index) => {
    return guess.status?.[index].letter || "";
  };

  const getStatus = (index) => guess.status?.[index].status || "";

  return (
    <p className="guess">
      {range(0, 5, 1).map((index) => (
        <span key={index} className={`cell ${getStatus(index)}`}>
          {getLetter(index)}
        </span>
      ))}
    </p>
  );
};
