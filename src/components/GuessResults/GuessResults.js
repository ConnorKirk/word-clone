import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import { Guess } from "../Guess";

export const GuessResults = ({ guesses }) => {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED, 1).map((index) => (
        <Guess key={index} guess={guesses[index]?.label} />
      ))}
    </div>
  );
};
