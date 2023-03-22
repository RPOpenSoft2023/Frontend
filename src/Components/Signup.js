import { useState } from "react";
import { signupFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";
import { showToastMessage } from "./Toast";
import { ToastContainer } from "react-toastify";
const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    createAccount();
  };

  //handle Signup API Integration here
  const createAccount = () => {
    axios
      .post("http://34.105.83.175:8080/user/api/register/", {
        phone_number: location.state,
        first_name: signupState.name,
        password: signupState.password,
        email_id: signupState.email,
        age: signupState.Age,
        aadhar_no: signupState.aadhar,
      })
      .then((res) => {
        console.log(res);
        localStorage.clear();
        navigate("/");
        showToastMessage("Successfully Registered");
      })
      .catch((error) => {
        console.log("error.message", error.message);
      });
  };
  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={(field.id=="phone_number" ? location.state : signupState[field.id])}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
            isDisabled={field.isDisabled}
          />
        ))}
        <FormAction handleSubmit={handleSubmit} text="Signup" />
        <ToastContainer />
      </div>
    </form>
  );
}
