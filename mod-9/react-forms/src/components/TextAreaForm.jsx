// Example: Controlled Textarea
import { useState } from 'react';
 
function TextAreaForm() {
  const [message, setMessage] = useState('');
 
  const handleTextAreaChange = (event) => {
    setMessage(event.target.value);
  };
 
  return (
    <form>
      <h2>Text Area Form</h2>
      <label htmlFor="messageArea">Message:</label>
      <textarea
        id="messageArea"
        value={message}
        onChange={handleTextAreaChange}
        rows={4}
      />
      <p>Message length: {message.length}</p>
    </form>
  );
};
 
export default TextAreaForm;