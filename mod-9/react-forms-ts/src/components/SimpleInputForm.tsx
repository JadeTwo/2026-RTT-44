// Example: Simple Controlled Input
import { useState } from 'react';

function SimpleInputForm() {
  const [name, setName] = useState<string>(''); // State holds the input value

  function handleChange (event: React.ChangeEvent<HTMLInputElement>) {
    // Update state when the input changes
    setName(event.target.value);
  };

  return (
    <form>
      <h2>Simple Input Form</h2>
      <label htmlFor="nameInput">Name:</label>
      <input
        type="text"
        id="nameInput"
        value={name} // Input value is controlled by state
        onChange={handleChange} // State is updated on change
      />
      <p>Current value: {name}</p>
    </form>
  );
};

export default SimpleInputForm;