import React, { useState } from "react";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import { GuessInput } from "../GuessInput";
import { GuessResults } from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED, STATE } from "../../constants";
import { checkGuess } from "../../game-helpers";
import { HappyBanner, SadBanner } from "../Banner";
import { Keyboard } from "../Keyboard";

// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [answer, setAnswer] = useState(sample(WORDS));
  console.info({ answer });

  const [guesses, setGuesses] = useState(
    range(0, NUM_OF_GUESSES_ALLOWED, 1).map(() => ({}))
  );
  const [index, setIndex] = useState(0);
  const [state, setState] = useState();
  const [seen, setSeen] = useState({});

  const addGuess = (guess) => {
    const next = [...guesses];
    const status = checkGuess(guess, answer);
    next[index] = {
      label: guess,
      id: crypto.randomUUID(),
      status,
    };
    setGuesses(next);

    const nextIndex = index + 1;
    setIndex(nextIndex);
    setSeen({
      ...seen,
      ...status.reduce((acc, { letter, status }) => {
        acc[letter] = status;
        return acc;
      }, {}),
    });

    if (guess === answer) {
      setState(STATE.WIN);
      return;
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
    setSeen({});
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      <Keyboard seen={seen} />
      <GuessInput disabled={state === STATE.LOSE} addGuess={addGuess} />
      {state === STATE.WIN && (
        <HappyBanner onClick={resetGame} attemptNum={index} />
      )}
      {state === STATE.LOSE && (
        <SadBanner onClick={resetGame} answer={answer} />
      )}
    </>
  );
}

export default Game;
