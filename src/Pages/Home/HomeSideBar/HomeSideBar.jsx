import { useState } from "react";

import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import Banner from "../Banner";
import AddProduct from "./AddProduct";
import ManageOrder from "./ManageOrder";
import MyAddress from "./MyAddress";
import MyOrder from "./MyOrder";
import ProductRequest from "./ProductRequest";
import Profile from "./Profile";
import RequestedProduct from "./RequestedProduct";
import SideBar from "./SideBar";

const HomeSideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const role = localStorage.getItem("role");
  const [activeMenu, setActiveMenu] = useState(
    role === "admin" ? "/" : "/"
  );

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  let mainContent;
  let headerContent;

  if (activeMenu === "/") {
    mainContent = <Banner />;
    headerContent = "";
  } else if (activeMenu === "myOrder") {
    mainContent = <MyOrder />;
    headerContent = "My Order";
  } else if (activeMenu === "myAddress") {
    mainContent = <MyAddress />;
    headerContent = "My Address";
  } else if (activeMenu === "productRequest") {
    mainContent = <ProductRequest />;
    headerContent = "Product Request";
  } else if (activeMenu === "myProfile") {
    mainContent = <Profile />;
    headerContent = "My Profile";
  } else if (activeMenu === "requestedProduct") {
    mainContent = <RequestedProduct />;
    headerContent = "My Requested Product";
  } else if (activeMenu === "addProduct") {
    mainContent = <AddProduct />;
    headerContent = "Add New Product";
  } else if (activeMenu === "manageOrder") {
    mainContent = <ManageOrder />;
    headerContent = "Manage Order";
  }

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className=" py-20 flex-col lg:flex-row bg-base-300">
      <button
        onClick={handleToggleSidebar}
        className=" z-50 fixed top-3 left-4 p-2  text-white rounded-md"
      >
        {isSidebarOpen ? (
          <GoSidebarExpand className="text-3xl" />
        ) : (
          <GoSidebarCollapse className="text-3xl" />
        )}
      </button>

      <div
        className={`z-20 fixed h-screen lg:w-1/6 drawer-overlay overflow-y-auto ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      >
        <SideBar activeMenu={activeMenu} onMenuClick={handleMenuClick} />
      </div>

      <div className="flex justify-end">
        {/* <div className="w-1/6">/</div> */}

        <div className="  bg-base-300 w-5/6  ">
          <header className="shadow-lg p-4">
            <h1 className="text-blue-800 font-bold text-xl ">
              {headerContent}
            </h1>
          </header>

          <main className="p-4">{mainContent}</main>
        </div>
      </div>
    </div>
  );
};

export default HomeSideBar;
