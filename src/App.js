import './App.css';
/* Import this to define useState correctly */
import { useState } from 'react';
//import { FirstComponent } from './components/FirstComponent';
//import { SecondComponent } from './components/SecondComponent';

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
   * Produces the shared counted 'number' to go
   * back to the time when it was clicked, losing
   * the count of the clicks since that point
   * 
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
   * in the function setNumber as argument to do
   * not use the past value which decreases the
   * counting
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
