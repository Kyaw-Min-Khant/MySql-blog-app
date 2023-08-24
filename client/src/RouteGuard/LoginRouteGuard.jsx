import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const LoginRouteGuard = ({ children }) => {
  const nav = useNavigate();
  const userInfo = Cookies?.get("User");
  useEffect(() => {
    if (userInfo) {
      nav("/");
    }
  }, [userInfo]);
  return children;
};
export default LoginRouteGuard;
