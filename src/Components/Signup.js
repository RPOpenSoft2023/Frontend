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
  console.log(signupState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (signupState.confirm_password === signupState.password) {
      createAccount();
    } else {
      showToastMessage(
        "Confirm Password is not matching the Password",
        "negative"
      );
    }
  };

  //handle Signup API Integration here
  const createAccount = () => {
    axios({
      method: "post",
      url: `${process.env.REACT_APP_USER_API}/register/`,
      data: {
        first_name: signupState.first_name,
        password: signupState.password,
        email: signupState.email_address,
        age: Number(signupState.Age),
        aadhar_no: signupState.Aadhar_Number,
      },
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt_token") },
    })
      .then((res) => {
        console.log(res);
        localStorage.clear();
        navigate("/");
        showToastMessage("Successfully Registered", "positive");
      })
      .catch((error) => {
        console.log("error.message", error.response.data);
        showToastMessage("Invalid Credentials", "negative");
      });
  };
  return (
    <>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="">
          {fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={
                field.id === "phone_number"
                  ? location.state
                  : signupState[field.id]
              }
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
    </>
  );
}
