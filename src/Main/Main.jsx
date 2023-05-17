import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer";
import NavBar from "../components/Shared/NavBar";

const Main = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
