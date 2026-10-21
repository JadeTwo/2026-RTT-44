import { useState } from "react"

export default function SimpleCounter() {

    const [count, setCount] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

  return (
    <div>

      <section>
        <h2>Counter One</h2>
        <p>Current Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(count + 5)}>Add 5</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </section>
      
      <section>
        <h2>Counter Two</h2>
        <p>Current Count: {countTwo}</p>
        <button onClick={() => setCountTwo(countTwo + count)}>Add {count}</button>
        <button onClick={() => setCountTwo(countTwo - count)}>Subtract {count}</button>
        <button onClick={() => setCountTwo(0)}>Reset</button>
      </section>

    </div>
  )
}