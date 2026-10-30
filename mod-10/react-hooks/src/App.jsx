import useWindowSize from "./hooks/useWindowSize"

export default function App() {

  // we can call our custom hook at the top-level of our component
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>Height: {height}</p>
      <p>Width: {width}</p>
    </div>
  )
}