import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { MyContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(MyContext);
  const handelLogOut = () => {
    logOut()
      .then(() => {
        alert("Log Out Success");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="navbar bg-base-100 shadow-lg">
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
            className="menu menu-sm dropdown-content space-y-3 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>

            <li tabIndex={0}>
              <details>
                <summary>Dashboard</summary>
                <ul className="flex gap-3 mt-3 flex-col">
                  <li>
                    <NavLink>Add Product</NavLink>
                  </li>
                  <li>
                    <NavLink>Add Product</NavLink>
                  </li>
                  <li>
                    <NavLink>Add Product</NavLink>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <Link to="/" className="flex justify-center items-center">
          
          <img className="w-16 h-12" src="logo.jpg" alt="" />
          <p className="text-2xl font-bold text-[#425CEC]">Local Tours and Guide
</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex justify-between items-center gap-5">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold bg-gray-800 py-2 px-3 rounded-md"
                  : "text-black font-bold bg-gray-300 py-2 px-3 rounded-md"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold bg-gray-800 py-2 px-3 rounded-md"
                  : "text-black font-bold bg-gray-300 py-2 px-3 rounded-md"
              }
              to="/about"
            >
              About
            </NavLink>
          </li>

          {user && (
            <li tabIndex={0}>
              <details>
                <summary>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-white font-bold bg-gray-800 py-2 px-3 rounded-md"
                        : "text-black font-bold bg-gray-300 py-2 px-3 rounded-md"
                    }
                  >
                    Dashboard
                  </NavLink>
                </summary>
                <ul className="flex flex-col justify-center items-center gap-2 z-50">
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-white font-bold bg-gray-800 py-2 px-3 rounded-md"
                          : "text-black font-bold bg-gray-300 py-2 px-3 rounded-md"
                      }
                      to="/addproduct"
                    >
                      My-Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-white font-bold bg-gray-800 py-2 px-3 rounded-md"
                          : "text-black font-bold bg-gray-300 py-2 px-3 rounded-md"
                      }
                      to="/addproduct"
                    >
                      Add-Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-white font-bold bg-gray-800 py-2 px-3 rounded-md"
                          : "text-black font-bold bg-gray-300 py-2 px-3 rounded-md"
                      }
                      to="/addproduct"
                    >
                      My-Schedules
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end mr-2">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-4 z-[1] p-2 shadow bg-base-100 rounded-box w-56"
            >
              <li>
                <p>{user.displayName}</p>
              </li>
              <li>
                <p>{user.email}</p>
              </li>
              <li>
                <p onClick={handelLogOut}>Log Out</p>
              </li>
            </ul>
          </div>
        ) : (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold bg-gray-800 py-2 px-3 rounded-md"
                : "text-black font-bold bg-gray-300 py-2 px-3 rounded-md"
            }
            to="/login"
          >
            Log in
          </NavLink>
        )}
        {/* {
          user?<button className="btn" onClick={handelLogOut}>Log Out</button>:<NavLink to='/login'>Log in</NavLink>
        } */}
      </div>
    </div>
  );
};

export default Navbar;
