// Example: Handling Form Submission
import { useState } from 'react';
 
function SubmitForm() {
  const [username, setUsername] = useState('');
 
  const handleChange = (event) => {
    setUsername(event.target.value);
  };
 
  const handleSubmit = (event) => {
    event.preventDefault(); // VERY IMPORTANT!
    alert(`Submitting username: ${username}`);
    // Here you would typically send the data to an API
    // e.g., fetch('/api/users', { method: 'POST', body: JSON.stringify({ username }) })
  };
 
  return (
    <form onSubmit={handleSubmit}> {/* Attach handler to form's onSubmit */}
       <h2>Submit Form</h2>
      <label htmlFor="usernameInput">Username:</label>
      <input
        type="text"
        id="usernameInput"
        value={username}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
 
export default SubmitForm;