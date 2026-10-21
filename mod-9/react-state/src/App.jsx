import { useState } from "react"

export default function App() {

  // React Hooks are called at the top-level of the component
  const [count, setCount] = useState(0);

  // setCount()

  // kind of tedious
  // const value = result[0];
  // const innerFunc = result[1];

  // array destructuring 
  // const [value, innerFunc] = useState();

  // if (true) {
  //   useState() // DON'T do this (this is inside a nested scope)
  // }

  function increment() {
    // update the state by using the setCount 
    setCount(count + 1) // <-- the argument is the new value
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={() => {
        // pass updater function as the argument
        setCount((prevCount) => prevCount + 5);
      }}>Add 5</button>
    </div>
  )
}