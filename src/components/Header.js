import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/customHook/useOnlineStatus";
import SearchBar from "./SearchBar";
import {
  useUpdateUserContext,
  useUserContext,
} from "../utils/context/UserContext";
import { useSelector } from "react-redux";
import store from "../redux/store";
import { LOGO_URL } from "../utils/constants";
import logo from "../assets/images/logo.png";
// !!Logo used in this project is for learning purpose only. No commercial usage is intended.

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useUserContext();
  const { clickHandler } = useUpdateUserContext();

  //subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);

  let itemQty = cartItems
    .map((item) => item.quantity)
    .reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="flex justify-between px-4 shadow-lg fixed top-0 w-full z-50 bg-white">
      <div>
        <Link to="/">
          <img className="w-24" src={logo} />
        </Link>
      </div>
      <div className="flex items-center justify-evenly">
        <ul className="flex p-4 text-gray-600 text-md ">
          <li className="hover:text-orange-400">{/* <SearchBar /> */}</li>

          <li className="p-4 hover:text-orange-400">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-4 hover:text-orange-400">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-4 hover:text-orange-400 ">
            <Link to="/cart">🛒 {itemQty} items</Link>
          </li>
          <button className="p-4 hover:text-orange-400" onClick={clickHandler}>
            Change user
          </button>
          <button
            className="p-4 hover:text-orange-400"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>

          <li className="p-4 hover:text-orange-400">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
