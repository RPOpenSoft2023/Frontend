import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { showToastMessage } from "./Toast";
const useAuth = (path=null) => {
  const navigate = useNavigate();
  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_USER_API}/verify_token`,
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt_token") },
    })
      .then((res) => {
        localStorage.setItem("logstat", "true");
        console.log("path", path);
        if(path === null || path === undefined || path === "/dashboard"){
          console.log("path", res.data);
          navigate("/dashboard", {
            state:{
              ...res.data
            }
          });
        }
      })
      .catch((error) => {
        console.log("error.message", error.message);
        localStorage.removeItem("jwt_token");
        localStorage.removeItem("logstat")
        navigate("/");
      });
  }, []);
};
export default useAuth;
