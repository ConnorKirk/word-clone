const ROWS = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

export const Keyboard = ({ seen }) => {
  console.log({ seen });
  return (
    <div class="keyboard">
      {ROWS.map((row) => (
        <div className="keyboard-row">
          {row.split("").map((char) => {
            return (
              <span className={`keyboard-character cell ${seen?.[char] || ""}`}>
                {char}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
};
