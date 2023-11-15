import { useRef } from 'react';

function FocusInput() {
  // Create a ref to store the input element
  const inputRef = useRef();

  // Function to focus on the input element
  const handleFocusClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      {/* Attach the ref to the input element */}
      <input ref={inputRef} type="text" />
      <button onClick={handleFocusClick}>Focus Input</button>
    </div>
  );
}

export default FocusInput;
