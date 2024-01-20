/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useAppSelector } from "../../redux/hook";
import CartSlider from "./CartSlider";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
    document.body.classList.toggle("drawer-open");
  };

  const handleCartSliderClose = () => {
    setIsDrawerOpen(false);
    document.body.classList.remove("drawer-open");
  };

  const { book } = useAppSelector((state) => state.cart);

  const totalQuantity = () => {
    let totalQuantity = 0;
    book.forEach((book) => {
      totalQuantity += book.quantity;
    });

    return totalQuantity;
  };

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  };

  const email = localStorage.getItem("email");
  const role = localStorage.getItem("role");

  return (
    <div className="navbar fixed z-20 sm:px-20 px-8  max-w-screen-2xl  bg-gray-700	h-4 ">
      <div className="navbar-start ">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-800 rounded-box w-52"
          >
            <li>
              <Link to="/dashboard" className="text-white font-semibold">
                My Order{" "}
              </Link>
            </li>

            <li>
              <Link
                to="/product-request"
                className="btn btn-sm mt-1  capitalize btn-accent"
              >
                Product Request
              </Link>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="btn  text-white font-bold text-xl btn-ghost normal-case "
        >
          E-Medicine
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal ">
          <li>
            <Link to="/dashboard" className="text-white font-semibold">
              My Order{" "}
            </Link>
          </li>
          {role==="admin" && (
            <li>
              <Link to="/dashboard" className="text-white font-semibold">
                Dashboard
              </Link>
            </li>
          )}

          <li>
            <Link
              to="/product-request"
              className="btn btn-sm mt-1  capitalize btn-accent"
            >
              Product Request
            </Link>
          </li>
        </ul>
      </div>

      <div className="drawer flex navbar-end drawer-end mr-5">
        <input
          id="my-drawer-4"
          type="checkbox"
          className="drawer-toggle"
          checked={isDrawerOpen}
          onChange={handleDrawerToggle}
        />

        <div className="drawer-content">
          <label htmlFor="my-drawer-4">
            <div className="badge badge-outline mr-2 badge-primary">
              <span className="text-xl">
                <FaShoppingCart></FaShoppingCart>
              </span>
              <span> {totalQuantity()}</span>
            </div>
          </label>
        </div>

        <div className="drawer-side ">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

          <div className="menu bg-base-300 p-4 w-72 h-full  text-base-content">
            <ul className="cart-slider-list">
              <CartSlider onClose={handleCartSliderClose} />
            </ul>
          </div>
        </div>

        {email ? (
          <>
            <Link to="/login">
              <button
                onClick={handleLogOut}
                className="btn btn-sm  capitalize btn-primary"
              >
                Log Out
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="btn btn-sm  capitalize btn-primary">
                Sign In
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
