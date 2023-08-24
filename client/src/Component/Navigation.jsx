import NavButton from "./NavButton";
import NavProfile from "./NavProfile";
import "../css/nav-title.css";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
const Navigation = () => {
  const token = Cookies.get("User");
  return (
    <div className="bg-[#ffffff] fixed w-screen py-2">
      <div className=" container px-10 mx-auto flex items-center justify-between">
        <Link to="/">
          <div className=" bg-brand/30 w-[50px] overflow-visible flex justify-center items-center h-[50px] rounded-full">
            <h2 className=" text-2xl tracking-wide font-body  title font-extrabold">
              SqlBlog
            </h2>
          </div>
        </Link>

        <div className="">{!token ? <NavButton /> : <NavProfile />}</div>
      </div>
    </div>
  );
};

export default Navigation;
