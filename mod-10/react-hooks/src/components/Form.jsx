import { useState } from "react"
import useForm from "../hooks/useForm"

const initialForm = {
    username: '',
    password: '',
    email: '',
    confirmPassword: '',
    newsletter: false
}

export default function Form() {

    // bring in our useForm hook and pass it the initial form values
    const { values, handleChange, handleSubmit } = useForm(initialForm)

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                name="username"
                value={values.username}
                onChange={handleChange}
                required
            />

            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                required
            />

            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
                type="password"
                id="confirm-password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
            />

            {/* show an error if passwords don't match */}
            {values.password !== values.confirmPassword && <p>Passwords don't match</p>}

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={values.email}
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
                checked={values.newsletter}
                onChange={handleChange}
                disabled={!values.email.includes("@")}
            />
            <label htmlFor="newsletter">Subscribe to newsletter</label>

            <br />
            <button disabled={values.password !== values.confirmPassword}>Submit</button>
        </form>
    )
}