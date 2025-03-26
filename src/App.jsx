import "./index.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Results from "./components/Results";
import { useState } from "react";





function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      };
    });
  }

  

  return (
    <div>
      <Header />
      <Input onChange={handleChange} userInput={userInput}/>
      {!inputIsValid && <p className='center'>Please enter a duratin greater than zero.</p>}
      {inputIsValid && <Results input={userInput}/>}
    </div>
  );
}

export default App;
