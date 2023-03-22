import { isDisabled } from "@testing-library/user-event/dist/utils"

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
        labelText: "Phone number",
        labelFor: "phone_number",
        id: "phone_number",
        name: "phone",
        type: "phone",
        autoComplete: "phone",
        isRequired: true,
        placeholder: "Phone number",
        isDisabled:true
    },
    {
        labelText: "First Name",
        labelFor: "first_name",
        id: "first_name",
        name: "name",
        type: "text",
        autoComplete: "name",
        isRequired: true,
        placeholder: "First Name",
        isDisabled:false
    },
    {
        labelText: "Email address",
        labelFor: "email-address",
        id: "email-address",
        name: "email",
        type: "email",
        autoComplete: "email",
        isRequired: true,
        placeholder: "Email address",
        isDisabled:false
    },
    {
        labelText: "Aadhar Number",
        labelFor: "Aadhar_number",
        id: "Aadhar_Number",
        name: "aadhar",
        type: "text",
        autoComplete: "aadhar",
        isRequired: true,
        placeholder: "Aadhar Number",
        isDisabled:false
    },
    {
        labelText: "Age",
        labelFor: "Age",
        id: "Age",
        name: "Age",
        type: "Number",
        autoComplete: "Age",
        isRequired: true,
        placeholder: "Age",
        isDisabled:false
    },
    {
        labelText: "Password",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        autoComplete: "current-password",
        isRequired: true,
        placeholder: "Password",
        isDisabled:false
    },
    {
        labelText: "Confirm Password",
        labelFor: "confirm-password",
        id: "confirm-password",
        name: "confirm-password",
        type: "password",
        autoComplete: "confirm-password",
        isRequired: true,
        placeholder: "Confirm Password",
        isDisabled:false
    },
    // {
    //     labelText: "Phone number",
    //     labelFor: "phone-number",
    //     id: "phone-number",
    //     name: "phone",
    //     type: "phone",
    //     autoComplete: "Phone-number",
    //     isRequired: true,
    //     placeholder: "Phone-number"
    // }
]

export { loginFields, signupFields }