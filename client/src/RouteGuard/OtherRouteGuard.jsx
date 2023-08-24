import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const OtherRouteGuard = ({ children }) => {
  const nav = useNavigate();
  const userInfo = Cookies?.get("User");
  useEffect(() => {
    if (userInfo == undefined) {
      nav("/");
    } else children;
  }, []);
  if (userInfo) {
    return children;
  }
};
export default OtherRouteGuard;
