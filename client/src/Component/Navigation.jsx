import NavButton from "./NavButton";
import NavProfile from "./NavProfile";
import "../css/nav-title.css";
import Cookies from "js-cookie";
const Navigation = () => {
  const token = Cookies.get("User");
  return (
    <div className="bg-[#ffffff] fixed w-screen py-2">
      <div className=" container px-10 mx-auto flex items-center justify-between">
        <h2 className=" text-4xl tracking-wide  title font-bold">BLOG</h2>
        <div className="">{!token ? <NavButton /> : <NavProfile />}</div>
      </div>
    </div>
  );
};

export default Navigation;
