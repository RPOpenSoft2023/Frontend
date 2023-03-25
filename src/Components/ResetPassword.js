import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FormAction from "./FormAction";
import Input from "./Input";
import ResendOTP from "./ResendOtp";
import { showToastMessage } from "./Toast";
import { ToastContainer } from "react-toastify";

export default function ForgotPassword(prop) {
  const [phoneNo, setPhoneNo] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [isOtpSent, setIsOtpSent] = useState(false);
  // const [isOtpVerified, setIsOtpVerified] = useState(false);

  const handlePhoneNoChange = (e) => {
    setPhoneNo(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };
  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSendOtpClick = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_USER_API}/generate_otp/`, {
        phone_number: phoneNo,
        purpose:"reset_password"
      })
      .then((res) => {
        console.log("res", res);
        setIsOtpSent(true);
      });
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    axios({
      method: "put",
      url: `${process.env.REACT_APP_USER_API}/forgot_password/`,
      data: {
        phone_number: phoneNo,
        otp: otp,
        new_password: NewPassword,
      },
    })
      .then((res) => {
        navigate("/");
        showToastMessage("Password Updated Successfully", "positive");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <form
      className="mt-8 space-y-6"
      onSubmit={!otp ? handleSendOtpClick : handleChangePassword}
    >
      <div className="-space-y-px">
        {!isOtpSent && (
          <div>
            <Input
              labelText="Phone number"
              value={phoneNo}
              handleChange={handlePhoneNoChange}
              labelFor="phone-number"
              id="phone-number"
              name="phone"
              type="phone"
              isRequired={true}
              placeholder="Phone number"
            />
            <FormAction handleSubmit={handleSendOtpClick} text="Send OTP" />
          </div>
        )}
        {isOtpSent && (
          <div>
            <Input
              labelText="Phone number"
              value={phoneNo}
              labelFor="Phone Number"
              id="phone_number"
              name="phone_number"
              type="phone"
              placeholder="Phone number"
              isDisabled={true}
            />
            <Input
              handleChange={handleOtpChange}
              value={otp}
              labelText="OTP"
              labelFor="otp"
              id="otp"
              name="otp"
              type="password"
              placeholder="OTP"
              isRequired={true}
            />
            <Input
              handleChange={handleNewPasswordChange}
              labelText="New Password"
              value={NewPassword}
              labelFor="New Password"
              id="new_password"
              name="phone"
              type="phone"
              placeholder="New Password"
              isDisabled={false}
            />
            <ResendOTP />
            <FormAction handleSubmit={handleChangePassword} text="Verify" />
            <ToastContainer />
          </div>
        )}
      </div>
    </form>
  );
}
