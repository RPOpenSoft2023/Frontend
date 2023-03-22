import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FormAction from "./FormAction";
import Input from "./Input";
import ResendOTP from "./ResendOtp";

export default function ForgotPassword(prop) {
  const [phoneNo, setPhoneNo] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const handlePhoneNoChange = (e) => {
    setPhoneNo(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSendOtpClick = (e) => {
    e.preventDefault();
    axios
      .post("http://34.105.83.175:8080/user/api/generate_otp/", {
        phone_number: phoneNo,
      })
      .then((res) => {
        localStorage.setItem("jwt_token", res.data.jwt_token);
        setIsOtpSent(true);
      });
  };

  const handleVerifyOtpClick = (e) => {
    e.preventDefault();   
    axios({
      method: "post",
      url: "http://34.105.83.175:8080/user/api/verify_otp/",
      data:{
        phone_number:phoneNo,
        otp: Number(otp),
      },
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt_token") },
    })
      .then((res) => {
        localStorage.setItem("jwt_token", res.data.token);
        navigate("/signup/profile",{state:phoneNo});
        setIsOtpVerified(true);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  //Handle Login API Integration here

  return (
    <form
      className="mt-8 space-y-6"
      onSubmit={!otp ? handleSendOtpClick : handleVerifyOtpClick}
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
              labelFor="phone-number"
              id="phone-number"
              name="phone"
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
            <ResendOTP />
            <FormAction handleSubmit={handleVerifyOtpClick} text="Verify" />
          </div>
        )}
      </div>
    </form>
  );
}