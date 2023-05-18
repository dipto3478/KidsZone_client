import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const NavBar = () => {
  const { logOutUser, user } = useContext(AuthContext);

  const handleLogout = () => {
    logOutUser()
      .then(() => {})
      .then((error) => console.log(error));
  };
  const nav = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">All Toys</Link>
      </li>
      <li>
        <Link to="/">My Toys</Link>
      </li>
      <li>
        <Link to="/">Add A Toy</Link>
      </li>
      <li>
        <Link to="/">Blogs</Link>
      </li>
    </>
  );
  return (
    <div>
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {nav}
            </ul>
          </div>
          <Link className="text-xl font-bold">KidsZone</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{nav}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <>
              <p title={user?.displayName} className="w-12  rounded-full mr-2">
                {" "}
                <img
                  className="border-4 border-black rounded-full"
                  src={user?.photoURL && user?.photoURL}
                  alt={user?.displayName}
                />{" "}
              </p>
              <button onClick={handleLogout} to="/login" className="btn">
                Log Out
              </button>
            </>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
