import { Avatar, Menu, rem } from "@mantine/core";
import Cookies from "js-cookie";
import { AiOutlineLogout } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useLogoutMutation } from "../api/userApi";
import toast, { Toaster } from "react-hot-toast";
const NavProfile = () => {
  //Api Method
  const [logout] = useLogoutMutation();
  //Get User Info
  const token = Cookies.get("User");
  const userName = JSON?.parse(Cookies.get("Info"));
  //Function
  const logoutHandler = async () => {
    const { data } = await logout(token);
    if (data?.data) {
      toast.success("Logout Success");
      Cookies.remove("Info");
      Cookies.remove("User");
      //refresh
      window.location.reload();
    }
  };
  return (
    <div className=" flex gap-4 justify-between items-center">
      <Toaster position="top-right" />

      <div className="">
        <Link to="/create">
          <button className=" flex gap-1 hover:bg-brand/70  items-center bg-brand rounded-md px-3 py-1  text-white font-semibold">
            <FiPlus /> <h1>Create</h1>
          </button>
        </Link>
      </div>
      <Menu>
        <Menu.Target>
          <Avatar color="green" radius="xl">
            {userName?.username.charAt(0)}
          </Avatar>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            onClick={logoutHandler}
            icon={<AiOutlineLogout className="text-[#ff0e0e]" size={rem(14)} />}
            component="a"
          >
            <h2 className="text-[#ff0e0e]">Logout</h2>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default NavProfile;
