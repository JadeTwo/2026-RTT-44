import Button from './components/Button'

export default function App() {
  const handlePrimaryClick = () => {
    alert('Primary button clicked!');
  };
 
  return (
    <div>
      <h1>Button Examples</h1>
      <Button text="Click Me" />
      <Button text="Submit" />
      <Button text="Reset" onClick={handlePrimaryClick} />
    </div>
  );
}
