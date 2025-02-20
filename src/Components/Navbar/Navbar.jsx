import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/freshcart-logo.svg";
import { useContext, useState } from "react";
import { authContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { token, setToken } = useContext(authContext);
  const { hearIcon } = useContext(CartContext);

  const [menuOpen, setMenuOpen] = useState(false);

  function handleLogout() {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");
  }

  return (
    <>
      <div className="bg-emerald-500 py-4">
        <div className="container flex px-5 mx-auto items-center gap-3 py-2 justify-between">
          <div className="flex items-center gap-3">
            <Link to="Products">
              <img src={logo} alt="Fresh Cart" />
            </Link>

            <ul className="hidden md:flex items-center gap-3 font-bold">
              {token && (
                <>
                  <li>
                    <NavLink to="/Products">Products</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Cart">Cart</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Brand">Brand</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Categories">Categories</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Wishlist">
                      Wishlist:{" "}
                      <i className="fa-solid fa-heart fa-bounce text-red-600"></i>{" "}
                      {hearIcon}
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-9">
              <i className="text-lg fa-brands fa-facebook cursor-pointer"></i>
              <i className="text-lg fa-brands fa-twitter cursor-pointer"></i>
              <i className="text-lg fa-brands fa-linkedin cursor-pointer"></i>
              <i className="text-lg fa-brands fa-behance cursor-pointer"></i>
            </div>

            <i
              className="text-lg fa-solid fa-bars cursor-pointer md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            ></i>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-emerald-700 p-4 text-white">
            <ul className="flex flex-col gap-3 font-bold">
              {token ? (
                <>
                  <li>
                    <NavLink to="/Products">Products</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Cart">Cart</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Brand">Brand</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Categories">Categories</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Wishlist">
                      Wishlist:{" "}
                      <i className="fa-solid fa-heart fa-bounce text-red-600"></i>{" "}
                      {hearIcon}
                    </NavLink>
                  </li>
                  <li>
                    <span className="cursor-pointer" onClick={handleLogout}>
                      Logout
                    </span>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/Vitee-commercial/Login">Login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Vitee-commercial/Register">Register</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

