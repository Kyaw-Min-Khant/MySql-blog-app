import { Link } from "react-router-dom";
import "../css/nav-title.css";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex bg-[#2b2b2b] justify-center items-center">
      <Link to="/">
        <h2 className=" tracking-wider text-[200px] font-bold title">404</h2>
      </Link>
    </div>
  );
};

export default ErrorPage;
