import { useState, useCallback } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // Without useCallback:
  // const handleClick = () => {
  //   console.log('Button clicked!');
  // };
  var i=0;
  // With useCallback:
  const handleClick = useCallback(() => {
    i+=1;
    console.log('Button clicked!', i);
    // You can use `count` or other variables inside this function
  }, [count]); // Only recreate the function if `count` changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;