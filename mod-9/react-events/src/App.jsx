import { useState } from "react";

export default function App() {

  const [inputValue, setInputValue] = useState('')

  function handleClick(event) {
    console.log('click')
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    alert('This is your input: ' + inputValue)
    setInputValue('');
  }

  return (
    <div>

      <button onClick={handleClick}>Click Me</button>

      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={inputValue} // Controlled input (or component) where the input is controlled by the state
          onChange={handleInputChange}
        />
        <button>Submit</button>
      </form>

      Validation: {inputValue.length >= 4 ? 'Passed' : 'Needs at least 4 characters'}

    </div>
  )
}