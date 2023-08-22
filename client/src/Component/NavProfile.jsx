import { Avatar, Menu, rem } from "@mantine/core";
import { AiOutlineLogout } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
const NavProfile = () => {
  return (
    <div className=" flex gap-4 justify-between items-center">
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
            MK
          </Avatar>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
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
