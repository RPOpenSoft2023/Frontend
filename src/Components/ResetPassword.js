import { useState } from 'react';
import FormAction from "./FormAction";
import Input from "./Input";

export default function SetPassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleConfirmPasswordChange = (e) => {
      setConfirmPassword(e.target.value);
    };
  
    const handleFinalSubmit = (e) => {
      e.preventDefault();
    };

    //Handle Login API Integration here
    const authenticateUser = () => {

    }

    return (
        <form className="mt-8 space-y-6" onSubmit={handleFinalSubmit}>
            <div className="-space-y-px">
                      
                        <div>
                        <Input
                        labelText= "Password"
                        value={password}
                        handleChange={handlePasswordChange}
                        labelFor="password"
                        id= "password"
                        name= "password"
                        type= "password"
                        placeholder= "Enter password"
                        isRequired
                        />
                        <Input
                        handleChange={handleConfirmPasswordChange}
                        value={confirmPassword}
                        labelText="confirmPassword"
                        labelFor="confirmPassword"
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder= "Confirm password"
                        isRequired
                        />
                        <FormAction handleSubmit={handleFinalSubmit} text="Reset Password" />
                        </div>
            </div>
        </form>
    )
}