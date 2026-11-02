/*
  Three steps to using Context:
    - Create 
    - Provide
    - Consume (Use it)
*/

// Step 1: Create the context
import { createContext } from "react"

const LastNameContext = createContext();

export default function App() {

  let lastName = 'Bobberton'

  // Step 2: Provide the context (to whatever components need it)
  return (
    <>
      <LastNameContext.Provider value={lastName}>
        <Grandparent lastName={lastName} />
      </LastNameContext.Provider>
    </>
  )
}

const Grandparent = () => <Parent />

const Parent = () => <Child />

const Child = () => <Grandchild />

// Step 3: Use the context
import { useContext } from "react";

const Grandchild = () => {

  // combine the useContext hook with our context object (passing it as an argument)
  const lastName = useContext(LastNameContext);

  return (
    <div>Hello, my name is Bob {lastName}</div>
  )
}