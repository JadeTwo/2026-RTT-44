Task: Create a useForm custom Hook to manage form state and basic validation.

Requirements:

- The Hook should accept an initialValues object (keys are field names, values are initial field values).
- Optionally, it can accept a validate function that takes the current form values and returns an errors object (e.g., { email: 'Email is required' }).
- It should return an object with:
    values: The current form values.
    errors: An object containing validation errors.
    handleChange: A function to update a field’s value (should handle standard input change events).
    handleSubmit: A function to be called on form submission (it should prevent default, run validation, and then perhaps call a provided onSubmit callback if valid).
    resetForm: A function to reset the form to its initial values.
- Use useState for values and errors.
handleChange should update the corresponding field in values.
handleSubmit should trigger validation. If validation passes, it should call an onSubmit callback (passed as an option to useForm) with the form values.