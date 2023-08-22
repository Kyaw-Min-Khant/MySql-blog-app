import Navigation from "./Component/Navigation";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <div className="container bg-[#f1efef] mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
