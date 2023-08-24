import Navigation from "./Component/Navigation";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <div className="pt-[30px]  lg:container mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
