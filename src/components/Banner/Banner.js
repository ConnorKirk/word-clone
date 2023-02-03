import { STATE } from "../../constants";

export const Banner = ({ answer, state, resetGame, attemptNum }) => {
  if (state === STATE.WIN)
    return (
      <HappyBanner attemptNum={attemptNum}>
        <ResetButton onClick={resetGame} />
      </HappyBanner>
    );
  if (state === STATE.LOSE)
    return (
      <SadBanner answer={answer}>
        <ResetButton onClick={resetGame} />
      </SadBanner>
    );
  return null;
};

const ResetButton = ({ onClick }) => <button onClick={onClick}>Reset</button>;

const HappyBanner = ({ attemptNum, children }) => (
  <div className="happy banner">
    <p>
      <strong>Congratulations!</strong> Got it in <strong>{attemptNum}</strong>.
    </p>
    {children}
  </div>
);

const SadBanner = ({ answer, children }) => (
  <div className="sad banner">
    <p>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </p>
    {children}
  </div>
);
