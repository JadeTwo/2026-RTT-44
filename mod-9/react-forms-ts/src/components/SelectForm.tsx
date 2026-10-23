// Example: Controlled Select
import { useState } from 'react';
 
function SelectForm() {
  const [selectedValue, setSelectedValue] = useState<string>('option2'); // Default value
 
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };
 
  return (
    <form>
        <h2>Select Form</h2>
      <label htmlFor="optionsSelect">Choose an option:</label>
      <select id="optionsSelect" value={selectedValue} onChange={handleSelectChange}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <p>Selected: {selectedValue}</p>
    </form>
  );
};
 
export default SelectForm;