import { useState } from "react"


export default function RegistrationForm() {

    const [form, setForm] = useState({ 
        username: '',
        password: '',
        email: '',
        confirmPassword: '',
        newsletter: false
    });

    function handleChange(e) {
        console.log('test')
        let { name, value } = e.target
        // pass a new object (because has a new reference)
        
        console.log(name, value);
        console.log(form.newsletter)

        // check if the input is the checkbox
        if (name === 'newsletter') {
            // if the value is "on", we want to change it to true
            // if the value is "off", we want to change it to false
            // convert the string value into a boolean
            value = value === "on" ? true : false;

        }

        console.log(name, value);

        setForm({ ...form, [name]: value });
    }

    return (
        <form>
            <label htmlFor="username">Username:</label>
            <input 
                type="text" 
                id="username" 
                name="username"
                value={form.username}
                onChange={handleChange}
            />
            
            <label htmlFor="password">Password:</label>
            <input 
                type="password" 
                id="password" 
                name="password"
                value={form.password}
                onChange={handleChange}
            />

            <label htmlFor="confirm-password">Confirm Password:</label>
            <input 
                type="password" 
                id="confirm-password" 
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
            />

            <label htmlFor="email">Email:</label>
            <input 
                type="email" 
                id="email" 
                name="email"
                value={form.email} 
                onChange={handleChange}
            />

            <input 
                type="checkbox" 
                id="newsletter" 
                name="newsletter"
                checked={form.newsletter}
                onChange={handleChange}
            />
            <label htmlFor="newsletter">Subscribe to newsletter</label>
        </form>
    )
}

// username (text input)
// password (password input)
// confirmPassword (password input)
// email (email input, optional)
// subscribeToNewsletter
// checkbox, only enabled if email is provided and valid
// basic validation like includes ’@’ is sufficient