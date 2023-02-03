export const HappyBanner = ({ attemptNum, onClick }) => (
  <Banner type="happy">
    <p>
      <strong>Congratulations!</strong> Got it in <strong>{attemptNum}</strong>.
    </p>
    <ResetButton onClick={onClick} />
  </Banner>
);

export const SadBanner = ({ answer, onClick }) => (
  <Banner type="sad">
    <p>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </p>
    <ResetButton onClick={onClick} />
  </Banner>
);

const Banner = ({ type, children }) => (
  <div className={`banner ${type}`}>{children}</div>
);

const ResetButton = ({ onClick }) => <button onClick={onClick}>Reset</button>;
