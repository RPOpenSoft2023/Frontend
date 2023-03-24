import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
const useAuth = (path = null) => {
  const navigate = useNavigate();
  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_USER_API}/verify_token`,
      headers: { Authorization: "Bearer " + localStorage.getItem("jwt_token") },
    })
      .then((res) => {
        if(path != null){
          navigate("/dashboard")
        }
      })
      .catch((error) => {
        console.log("error.message", error.message);
        navigate("/");
      });
  }, []);
};
export default useAuth;
