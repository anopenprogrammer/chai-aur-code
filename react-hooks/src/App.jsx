import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValues = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
    else{
      return;
    }
  };

  const removeValues = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
    else{
      return;
    }
  };

  return (
    <>
      <h1>Learning Hooks</h1>
      <h3>Counter Value: {counter}</h3>
      <button onClick={addValues}>Increment</button>
      <button onClick={removeValues}>Decrement</button>
    </>
  );
}

export default App;
