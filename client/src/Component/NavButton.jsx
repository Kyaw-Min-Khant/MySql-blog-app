import { Link } from "react-router-dom";

const NavButton = () => {
  return (
    <div className=" flex justify-between gap-3 items-center">
      <Link to="/login">
        <button className="bg-brand hover:bg-brand/70 text-white font-medium px-4 py-1 text-[16px] rounded">
          Login
        </button>
      </Link>
      <Link to="/register">
        <button className=" text-brand border border-brand hover:text-white hover:bg-brand font-medium px-4 py-1 text-[16px] rounded">
          Sign Up
        </button>
      </Link>
    </div>
  );
};

export default NavButton;
