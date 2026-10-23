// Example: Controlled Checkbox
import React, { useState } from 'react';
 
function CheckboxForm() {
  const [isChecked, setIsChecked] = useState(false);
 
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked); // Use event.target.checked
  };
 
  return (
    <form>
        <h2>Checkbox Form</h2>
      <label>
        <input
          type="checkbox"
          checked={isChecked} // Use 'checked' prop
          onChange={handleCheckboxChange}
        />
        Agree to terms
      </label>
      <p>Agreed: {isChecked ? 'Yes' : 'No'}</p>
    </form>
  );
};
 
export default CheckboxForm;