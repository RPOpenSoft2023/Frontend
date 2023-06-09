import { useState } from "react";
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import axios from "axios";
import * as Yup from "yup";
import { showToastMessage } from "./Toast";
import { ToastContainer } from "react-toastify";
import {useNavigate} from "react-router-dom"
import useAuth from "./Auth";
const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
  useAuth("login")
  const navigate=useNavigate();
  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    schema
      .isValid({
        phoneNumber: loginState.phone_number,
      })
      .then(function (valid) {
        if (!valid) {
          showToastMessage("Enter a valid phone number", "negative");
        } else {
          authenticateUser();
        }
      });
  };

  //Handle Login API Integration here
  const authenticateUser = () => {
    axios
      .post(`${process.env.REACT_APP_USER_API}/login/`, {
        phone_number: loginState.phone_number,
        password: loginState.password,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("logstat", true);
        localStorage.setItem("jwt_token", res.data.login_token);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log("error.message", error.message);
        showToastMessage("Invalid Credentials", "negative");
      });
  };
  //validatoin schema
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  let schema = Yup.object().shape({
    phoneNumber: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .max(10),
  });
  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <ToastContainer />
      </div>

      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
}
