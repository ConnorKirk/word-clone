import { useState } from "react";

export const GuessInput = ({ addGuess, disabled }) => {
  const [guess, setGuess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess.length < 5) return;

    addGuess(guess);

    setGuess("");
    console.log({ guess });
  };

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={disabled}
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        minLength={5}
        maxLength={5}
      />
    </form>
  );
};
