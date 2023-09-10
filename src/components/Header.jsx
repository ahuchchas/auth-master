import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  function handleLogout() {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <div className="navbar bg-indigo-200">
      <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      <Link className="btn btn-ghost normal-case " to="/">
        Home
      </Link>
      <Link className="btn btn-ghost normal-case " to="/orders">
        Orders
      </Link>
      {user ? (
        <>
          <span className=" font-bold mx-4">{user.email}</span>
          <button className="btn btn-xs" onClick={handleLogout}>
            LogOut
          </button>
        </>
      ) : (
        <>
          <Link className="btn btn-ghost normal-case " to="/login">
            Login
          </Link>
          <Link className="btn btn-ghost normal-case " to="/register">
            Register
          </Link>
        </>
      )}
    </div>
  );
};

export default Header;
