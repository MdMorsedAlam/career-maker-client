import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { MyContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user,logOut } = useContext(MyContext);

  const handelLogOut=()=>{
    logOut().then(()=>{
      alert("Log Out Success")
    }).catch(err=>{
      console.log(err.message)
    })

  }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
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
             <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>

            <li tabIndex={0}>
        <details>
          <summary>Dashboard</summary>
          <ul className="w-full">
            <li><NavLink>Add Product</NavLink></li>
            <li><NavLink>Add Product</NavLink></li>
            <li><NavLink>Add Product</NavLink></li>
          </ul>
        </details>
      </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>

          {
            user&&<li tabIndex={0}>
            <details>
            <summary> Dashboard </summary>
            <ul className="flex flex-col justify-center items-center gap-2">
              <li><NavLink>Add Product</NavLink></li>
              <li><NavLink>Add Product</NavLink></li>
              <li><NavLink>Add Product</NavLink></li>
            </ul>
          </details>
        </li>
          }
        </ul>
      </div>
      <div className="navbar-end">
        {
          user?<button className="btn" onClick={handelLogOut}>Log Out</button>:<NavLink to='/login'>Log in</NavLink>
        }
      </div>
    </div>
  );
};

export default Navbar;
