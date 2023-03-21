const loginFields = [
    {
        labelText: "Phone number",
        labelFor: "phone_number",
        id: "phone_number",
        name: "phone",
        type: "phone",
        autoComplete: "phone",
        isRequired: true,
        placeholder: "Phone number"
    },
    {
        labelText: "Password",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        autoComplete: "current-password",
        isRequired: true,
        placeholder: "Password"
    }
]

const signupFields = [
    {
        labelText: "First Name",
        labelFor: "first_name",
        id: "first_name",
        name: "name",
        type: "text",
        autoComplete: "name",
        isRequired: true,
        placeholder: "First Name"
    },
    {
        labelText: "Email address",
        labelFor: "email-address",
        id: "email-address",
        name: "email",
        type: "email",
        autoComplete: "email",
        isRequired: true,
        placeholder: "Email address"
    },
    {
        labelText: "Aadhar Number",
        labelFor: "Aadhar_number",
        id: "Aadhar_Number",
        name: "aadhar",
        type: "text",
        autoComplete: "aadhar",
        isRequired: true,
        placeholder: "Aadhar Number"
    },
    {
        labelText: "Age",
        labelFor: "Age",
        id: "Age",
        name: "Age",
        type: "Number",
        autoComplete: "Age",
        isRequired: true,
        placeholder: "Age"
    },
    {
        labelText: "Password",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        autoComplete: "current-password",
        isRequired: true,
        placeholder: "Password"
    },
    {
        labelText: "Confirm Password",
        labelFor: "confirm-password",
        id: "confirm-password",
        name: "confirm-password",
        type: "password",
        autoComplete: "confirm-password",
        isRequired: true,
        placeholder: "Confirm Password"
    },
]

export { loginFields, signupFields }