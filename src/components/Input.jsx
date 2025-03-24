const Input = () => {
  return (
    <div id="user-input">
      <span class="input-group">
        <span>
          <label for="initial-investment">INITIAL INVESTMENT</label>
          <input
            type="number"
            id="initial-investment"
            name="initial-investment"
            // value={inputValue}
            // onChange={handleChange}
            placeholder="Type something"
          />
        </span>
        <span>
          <label for="annual-investment">ANNUAL INVESTMENT</label>
          <input
            type="number"
            id="annual-investment"
            name="annual-investment"
            // value={inputValue}
            // onChange={handleChange}
            placeholder="Type something"
          />
        </span>
      </span>

      <br />
      <span class="input-group">
        <span>
          <label htmlFor="nameInput">EXPECTED RETURN</label>

          <input
            type="number"
            id="nameInput"
            // value={inputValue}
            // onChange={handleChange}
            placeholder="Type something"
          />
        </span>
        <span>
          <label htmlFor="nameInput">DURATION</label>
          <input
            type="number"
            id="nameInput"
            // value={inputValue}
            // onChange={handleChange}
            placeholder="Type something"
          />
        </span>
      </span>
    </div>
  );
};

export default Input;
