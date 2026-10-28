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

        let { name, value, checked } = e.target
        // pass a new object (because has a new reference)
        
        console.log(name, value, checked);

        // change the value if it's the checkbox input
        value = name === "newsletter" ? checked : value;

        setForm({ ...form, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(form);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input 
                type="text" 
                id="username" 
                name="username"
                value={form.username}
                onChange={handleChange}
                required
            />
            
            <label htmlFor="password">Password:</label>
            <input 
                type="password" 
                id="password" 
                name="password"
                value={form.password}
                onChange={handleChange}
                required
            />

            <label htmlFor="confirm-password">Confirm Password:</label>
            <input 
                type="password" 
                id="confirm-password" 
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
            />

            {/* show an error if passwords don't match */}
            {form.password !== form.confirmPassword && <p>Passwords don't match</p>}

            <label htmlFor="email">Email:</label>
            <input 
                type="email" 
                id="email" 
                name="email"
                value={form.email} 
                onChange={handleChange}
            />

        {/* 
            if the email field contains text and includes an ”@” symbol
            it should be enabled. Otherwise, disable.
        */}
            <input 
                type="checkbox" 
                id="newsletter" 
                name="newsletter"
                checked={form.newsletter}
                onChange={handleChange}
                disabled={!form.email.includes("@")}
            />
            <label htmlFor="newsletter">Subscribe to newsletter</label>

            <br />
            <button disabled={form.password !== form.confirmPassword}>Submit</button>
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