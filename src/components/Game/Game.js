import React, { useState } from "react";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import { GuessInput } from "../GuessInput/GuessInput";
import { GuessResults } from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED, STATE } from "../../constants";
import { checkGuess } from "../../game-helpers";
import { Banner } from "../Banner/Banner";

// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [answer, setAnswer] = useState(sample(WORDS));
  console.info({ answer });

  const [guesses, setGuesses] = useState(
    range(0, NUM_OF_GUESSES_ALLOWED, 1).map(() => ({}))
  );
  const [index, setIndex] = useState(0);
  const [state, setState] = useState();

  const addGuess = (guess) => {
    const next = [...guesses];
    next[index] = {
      label: guess,
      id: crypto.randomUUID(),
      status: checkGuess(guess, answer),
    };
    setGuesses(next);

    const nextIndex = index + 1;
    setIndex(nextIndex);

    if (guess === answer) {
      setState(STATE.WIN);
    }
    if (nextIndex >= NUM_OF_GUESSES_ALLOWED) {
      setState(STATE.LOSE);
    }
  };

  const resetGame = () => {
    setAnswer(sample(WORDS));
    setGuesses(range(0, NUM_OF_GUESSES_ALLOWED, 1).map(() => ({})));
    setIndex(0);
    setState(STATE.ACTIVE);
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput disabled={state === STATE.LOSE} addGuess={addGuess} />
      <Banner
        answer={answer}
        state={state}
        resetGame={resetGame}
        attemptNum={index}
      />
    </>
  );
}

export default Game;
