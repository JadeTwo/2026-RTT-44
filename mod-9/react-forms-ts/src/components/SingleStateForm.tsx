// Example: Single State Object
import { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}
 
function SingleStateForm() {
    
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
  });
 
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target; // Destructure name and value

    // this does not work
    // formData[name] = value
    // setFormData(formData)

    // this would work
    // const newFormData = { ...formData }
    // newFormData[name] = value
    // setFormData(newFormData)

    // Option 1: Pass the new value (new object)
    setFormData({ 
      ...formData, 
      [name]: value 
    })

    // // Option 2: Using the updater (callback) function
    // setFormData(prevFormData => ({
    //   ...prevFormData, // Spread existing state
    //   [name]: value     // Update changed field using computed property name
    // }));
  };
 
  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitting:', formData);
    // API call logic...
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <h2>Single State Form</h2>
      <label>First Name:</label>
      {/* IMPORTANT: Add 'name' attribute matching the state key */}
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <label>Last Name:</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default SingleStateForm;