import { Outlet } from "react-router-dom";
import HomeSideBar from "../Pages/Home/HomeSideBar/HomeSideBar";
import NavBar from "../Pages/Shared/NavBar";
import Footer from "./../Pages/Shared/Footer";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <HomeSideBar />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
