import Button from './components/Button';
import Section from './components/Section';

export default function App() {
  const handlePrimaryClick = () => {
    alert('Primary button clicked!');
  };
 
  return (
    <div>
      <h1>Button Examples</h1>
      <Section title="Buttons">
        <Button text="Click Me" />
        <Button text="Submit" />
        <Button text="Reset" onClick={handlePrimaryClick} />
      </Section>
      <Section title="Text">
        Plain Text
      </Section>
    </div>
  );
}

// In App.tsx, use the Section component to wrap different content areas (e.g., wrap the buttons from Activity 1, wrap some plain text).
