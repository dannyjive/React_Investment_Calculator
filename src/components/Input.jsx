const Input = ({ onChange, userInput }) => {
  return (
    <section id="user-input">
      <span className="input-group">
        <span>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(e) => onChange("initialInvestment", e.target.value)}
            required
          />
        </span>
        <span>
          <label htmlFor="annual-investment">ANNUAL INVESTMENT</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(e) => onChange("annualInvestment", e.target.value)}
            required
          />
        </span>
      </span>

      <br />
      <span className="input-group">
        <span>
          <label htmlFor="nameInput">EXPECTED RETURN</label>

          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(e) => onChange("expectedReturn", e.target.value)}
            required
          />
        </span>
        <span>
          <label htmlFor="nameInput">DURATION</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(e) => onChange("duration", e.target.value)}
            required
          />
        </span>
      </span>
    </section>
  );
};

export default Input;
