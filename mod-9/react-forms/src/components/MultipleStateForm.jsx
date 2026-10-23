// Example: Multiple useState
import { useState } from 'react';
 
function MultiStateForm() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting:', { firstName, lastName, email });
    // API call logic...
  };
 
  return (
    <form onSubmit={handleSubmit}>
        <h2>Multiple State Form</h2>
      <label>First Name:</label>
      <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
      <label>Last Name:</label>
      <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
      <label>Email:</label>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
};

export default MultiStateForm