import { useState } from "react";

export default function useForm(initialValues) {

    const [form, setForm] = useState(initialValues);
    const [errors, setErrors] = useState({});

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

    function resetForm() {
        setForm(initialValues)
    }

    // package up everything we want to share with out component in an object
    return { 
        values: form,
        errors: errors,
        handleChange,
        handleSubmit,
        resetForm
    }
}