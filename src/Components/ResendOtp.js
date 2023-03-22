import React, { useEffect, useState } from "react";
let min_i=5;
let sec_i=0;


function ResendOTP() {
  const [minutes, setMinutes] = useState(min_i);
  const [seconds, setSeconds] = useState(sec_i);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const resendOTP = () => {
    setMinutes(min_i);
    setSeconds(sec_i);
  };

  return (
    <>

        <div className="countdown-text flex items-center justify-between">
          {seconds > 0 || minutes > 0 ? (
            <p>
              Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </p>
          ) : (
            <span>Didn't receive code?</span>
          )}

          <button className=""
            disabled={seconds > 0 || minutes > 0}
            style={{
              color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#FF5630",
            }}
            onClick={resendOTP}
          >
            Resend OTP
          </button>
        </div>
  </>

  );
}

export default ResendOTP;