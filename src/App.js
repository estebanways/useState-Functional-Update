import './App.css';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);

  /*
   * Increases any number by one 
   */
  const increase = () => {
    setNumber(number + 1);
  };

  /*
   * Increases any number by one, asynchronously
   */
  const increaseAsync = () => {
    setTimeout (() => {
      setNumber(number + 1);
    }, 2000);
  };

  /*
   * Increases any number by one, asynchronously
   * It passes the previous stored value 'prev',
   * the current value 'current' or currentNumber
   */
  const increaseAsyncFixed = () => {
    setTimeout (() => {
      setNumber((currentNumber) => currentNumber + 1);
    }, 2000);
  };

  return (
    <div className="App">
      <button onClick={increase}>Increase</button>
      <button onClick={increaseAsync}>Increase Async</button>
      <button onClick={increaseAsyncFixed}>Increase Async Fixed</button>
      <h1>{number}</h1>
    </div>
  );
}

export default App;
