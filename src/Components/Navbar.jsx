import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [isToggled, setIsToggled] = useState(false);

  const handleSignOut = () => {
    logOut();
  };

  const handleThemeChange = () => {
    setIsToggled(!isToggled);

    const navbar = document.getElementById("toggler");
    if (!isToggled) {
      navbar.setAttribute("data-theme", "dark");
      navbar.classList = "container mx-auto text-white p-5 duration-700";
    } else {
      navbar.setAttribute("data-theme", "light");
      navbar.classList = "container mx-auto text-black p-5 duration-700";
    }
  };

  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/addProduct"}>Add Product</NavLink>
      </li>
      <li>
        <NavLink to={"/myCart"}>My Cart</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>Login</NavLink>
      </li>
      <li>
        <NavLink to={"/category"}>Add Category</NavLink>
      </li>
      <li>
        <NavLink to={"/feedback"}>Feedbacks</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to={"/give-feedback"}>Give Feedback</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className=" bg-base-100">
      <div>
        {/* dropdown for phone here */}
        <div className="dropdown flex md:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>

        <div className="flex items-center justify-center gap-5">
          <img
            src="https://i.ibb.co/XC2KxyC/web-logo.png"
            className="w-20 md:flex"
          />
          <p className="font-bold text-2xl font-mono hidden md:flex">
            Tech Park
          </p>
        </div>
      </div>
      {/* drop down ends here */}

      <div className="hidden lg:flex justify-center items-center gap-5">
        <ul className="menu menu-horizontal px-1 text-center">{navLinks}</ul>
        <div className=" items-center gap-4">
            {user ? (
              <div className="flex flex-col md:flex-row gap-1 rounded-xl items-center border bg-gradient-to-tl from-cyan-500 via-blue-300 to-teal-500 p-2">
                <img src={user.photoURL} alt="" className="w-9 rounded-full" />
                <p>{user.displayName}</p>
                <button
                  className="btn btn-sm btn-outline"
                  onClick={handleSignOut}
                >
                  Sign out
                </button>
              </div>
            ) : (
              <button className="btn btn-outline btn-sm">Login</button>
            )}
          </div>
        <input
            type="checkbox"
            className="toggle ml-3"
            name="theme"
            onClick={handleThemeChange}
          />
      </div>
    </div>
  );
};

export default Navbar;
