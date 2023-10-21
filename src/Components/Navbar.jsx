import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";


const Navbar = () => {

  const {user, logOut} = useContext(AuthContext);

  const [isToggled, setIsToggled] = useState(false);

  const handleSignOut = () =>{
    logOut();
  }

  const handleThemeChange =() =>{
    setIsToggled(!isToggled);
    
    const navbar=  document.getElementById('toggler');
    if(!isToggled){
      navbar.setAttribute("data-theme", "dark");
      navbar.classList = "container mx-auto text-white p-5 duration-700"
    }
    else{
      navbar.setAttribute("data-theme", "light")
      navbar.classList = "container mx-auto text-black p-5 duration-700"
    }
  }

  

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/addProduct'}>Add Product</NavLink></li>
        <li><NavLink to={'/myCart'}>My Cart</NavLink></li>
        <li><NavLink to={'/login'}>Login</NavLink></li>
        <li><NavLink to={'/category'}>Add Category</NavLink></li>
    </>;

  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    
    <div className="flex items-center justify-center gap-5">
      <img src="https://i.ibb.co/XC2KxyC/web-logo.png" className="w-20 hidden md:flex" />
    <p className="font-bold text-2xl font-mono hidden md:flex">Tech Park</p>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-center md:navbar-end">
  <input type="checkbox" className="toggle" name="theme" onClick={handleThemeChange} />
    {
      user? <div className="flex gap-1 p-1 rounded-xl items-center border">
        <img src={user.photoURL} alt="" className="w-9 rounded-full"/>
        <p>{user.displayName}</p>
      <button className="btn btn-sm btn-outline" onClick={handleSignOut}>Sign out</button>
      </div>:
      <button className="btn btn-outline btn-sm" >Login</button>
    }
  </div>
</div>
  );
};

export default Navbar;
