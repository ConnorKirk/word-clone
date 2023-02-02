import React, { useState } from "react";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import { GuessInput } from "../GuessInput/GuessInput";
import { GuessResults } from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState(
    range(0, NUM_OF_GUESSES_ALLOWED, 1).map(() => ({}))
  );
  console.log({ guesses });
  const [index, setIndex] = useState(0);

  const addGuess = (guess) => {
    const next = [...guesses];
    next[index] = { label: guess, id: crypto.randomUUID() };
    setGuesses(next);
    setIndex(index + 1);
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput addGuess={addGuess} />;
    </>
  );
}

export default Game;
